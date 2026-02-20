import React, { useState, useEffect } from 'react';
import { comingSoon } from '../data/activities';
import { client, urlFor } from '../sanityClient';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [terms, setTerms] = useState([]);
    const [clubs, setClubs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const previousPosts = posts.filter(post => post.status === 'previous' || !post.status);
    const upcomingPosts = posts.filter(post => post.status === 'upcoming');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsQuery = '*[_type == "post"] | order(publishedAt desc)';
                const termsQuery = '*[_type == "termDate"] | order(order asc)';
                const clubsQuery = '*[_type == "holidayClub"] | order(order asc)';

                const [postsData, termsData, clubsData] = await Promise.all([
                    client.fetch(postsQuery),
                    client.fetch(termsQuery),
                    client.fetch(clubsQuery)
                ]);

                setPosts(postsData);
                setTerms(termsData);
                setClubs(clubsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-navy-900 mb-12 text-center">News & Activities</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content Area - Previous Activities */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-semibold text-navy-900 mb-6 flex items-center">
                                <span className="mr-2">🚀</span> Coming Soon
                            </h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {isLoading ? (
                                    <div className="col-span-2 text-center py-6 text-slate-500">Loading upcoming activities...</div>
                                ) : upcomingPosts.length > 0 ? (
                                    upcomingPosts.map((item) => (
                                        <div key={item._id} className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col h-full">
                                            {item.mainImage && (
                                                <img src={urlFor(item.mainImage).width(400).url()} alt={item.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                                            )}
                                            <div className="text-sm font-semibold text-blue-600 mb-1">
                                                {new Date(item.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </div>
                                            <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-600 text-sm flex-grow">{item.excerpt || 'More details coming soon!'}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-2 bg-blue-50 rounded-xl p-6 border border-blue-100 text-center text-slate-500">
                                        No upcoming events currently scheduled. Check back soon!
                                    </div>
                                )}
                            </div>
                        </section>

                        <section className="pt-8">
                            <h2 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
                                <span className="mr-2">🎉</span> Previous Activities
                            </h2>
                            <div className="grid gap-8">
                                {isLoading ? (
                                    <div className="text-center py-10 text-slate-500">Loading activities...</div>
                                ) : previousPosts.length > 0 ? (
                                    previousPosts.map((post) => (
                                        <div key={post._id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 transition hover:shadow-md">
                                            {post.mainImage && (
                                                <img src={urlFor(post.mainImage).width(800).url()} alt={post.title} className="w-full h-48 object-cover" />
                                            )}
                                            <div className="p-6">
                                                <div className="text-sm text-slate-500 mb-2">
                                                    {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </div>
                                                <h3 className="text-xl font-bold text-navy-900 mb-2">{post.title}</h3>
                                                <p className="text-slate-600">{post.excerpt || 'Read more about this activity...'}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="bg-white rounded-xl shadow-sm p-8 text-center text-slate-500 border border-slate-100">
                                        No recent activities posted yet. Check back soon!
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar - Term Dates */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-navy-900 mb-6 border-b pb-2">Term Dates & Holidays</h2>

                            <div className="mb-8">
                                <h3 className="font-semibold text-red-600 mb-3 uppercase text-sm tracking-wider">School Terms</h3>
                                <div className="space-y-4">
                                    {terms.map((term) => (
                                        <div key={term._id || term.term} className="text-sm">
                                            <div className="font-medium text-slate-900">{term.term}</div>
                                            <div className="text-slate-600">{term.dates}</div>
                                            <div className="text-slate-500 text-xs mt-1">Half Term: {term.halfterm}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-red-600 mb-3 uppercase text-sm tracking-wider">Holiday Club</h3>
                                <div className="space-y-4">
                                    {clubs.map((club) => (
                                        <div key={club._id || club.name} className="text-sm bg-slate-50 p-3 rounded-lg">
                                            <div className="font-medium text-slate-900">{club.name}</div>
                                            <div className="text-slate-600 mb-1">{club.dates}</div>
                                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${club.status === 'Open for Booking' ? 'bg-green-100 text-green-700' :
                                                club.status === 'Completed' ? 'bg-slate-200 text-slate-600' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {club.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <a href="https://magicbooking.co.uk" target="_blank" rel="noopener noreferrer" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 rounded-lg transition">
                                    Book Now on MagicBooking
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;
