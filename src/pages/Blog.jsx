import React from 'react';
import { termDates, holidayClubDates } from '../data/holidays';
import { activities, comingSoon } from '../data/activities';

const Blog = () => {
    return (
        <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-navy-900 mb-12 text-center">News & Activities</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content Area - Previous Activities */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
                                <span className="mr-2">🎉</span> Previous Activities
                            </h2>
                            <div className="grid gap-8">
                                {activities.map((activity) => (
                                    <div key={activity.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 transition hover:shadow-md">
                                        <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
                                        <div className="p-6">
                                            <div className="text-sm text-slate-500 mb-2">{activity.date}</div>
                                            <h3 className="text-xl font-bold text-navy-900 mb-2">{activity.title}</h3>
                                            <p className="text-slate-600">{activity.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="pt-8">
                            <h2 className="text-2xl font-semibold text-navy-900 mb-6 flex items-center">
                                <span className="mr-2">🚀</span> Coming Soon
                            </h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {comingSoon.map((item) => (
                                    <div key={item.id} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                        <div className="text-sm font-semibold text-blue-600 mb-1">{item.date}</div>
                                        <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.description}</p>
                                    </div>
                                ))}
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
                                    {termDates.map((term, index) => (
                                        <div key={index} className="text-sm">
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
                                    {holidayClubDates.map((club, index) => (
                                        <div key={index} className="text-sm bg-slate-50 p-3 rounded-lg">
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
