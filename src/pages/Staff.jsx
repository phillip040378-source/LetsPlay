import React from 'react';
import { staffMembers } from '../data/staff';

const Staff = () => {
    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-900 mb-4">Meet Our Team</h1>
                    <p className="text-lg text-slate-600">
                        Our dedicated staff members are passionate about providing a safe, fun, and nurturing environment for your children.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staffMembers.map((staff) => (
                        <div key={staff.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="aspect-square overflow-hidden bg-slate-100 relative">
                                <img
                                    src={staff.image}
                                    alt={staff.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium">{staff.role}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-navy-900 mb-1">{staff.name}</h3>
                                <p className="text-red-600 text-sm font-medium mb-4">{staff.role}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {staff.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Staff;
