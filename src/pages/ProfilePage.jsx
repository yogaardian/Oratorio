import React, { useState } from 'react';
import './ProfilePage.css';

// Ikon dari library react-icons
import { FiUser, FiLock, FiSettings } from 'react-icons/fi';

// Data awal pengguna
const initialUserData = {
    firstName: 'Yoga',
    lastName: 'Ardianp',
    username: 'Yoga',
    email: 'yogaardian94@gmail.com',
    phone: null,
    dob: null,
    hometown: 'Jakarta, Java, ID'
};

const ProfilePage = () => {
    // State untuk melacak mode edit untuk setiap field
    const [editMode, setEditMode] = useState({
        fullName: false,
        email: false,
        phone: false,
        dob: false,
        hometown: false
    });

    const [currentUser, setCurrentUser] = useState(initialUserData);
    const [formData, setFormData] = useState(initialUserData);

    const handleEdit = (field) => {
        setFormData(currentUser);
        setEditMode({ ...editMode, [field]: true });
    };

    const handleCancel = (field) => {
        setEditMode({ ...editMode, [field]: false });
    };

    const handleSave = (field) => {
        setCurrentUser(formData);
        setEditMode({ ...editMode, [field]: false });
        // Di sini Anda akan memanggil API untuk menyimpan ke database
    };

    // Fungsi handleChange yang sudah diperbaiki
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="account-page">
            <aside className="account-sidebar">
                <div className="user-greeting">
                    <div className="user-avatar">{currentUser.firstName.charAt(0)}A</div>
                    <h2>Hello, {currentUser.username}!</h2>
                </div>
                <nav className="account-nav">
                    <a href="#personal" className="nav-item active"><FiUser /> Personal information</a>
                    {/* <a href="#security" className="nav-item"><FiLock /> Login & Security</a>
                    <a href="#site" className="nav-item"><FiSettings /> Site preferences</a> */}
                </nav>
            </aside>

            <main className="account-content">
                <section id="personal">
                    <h1 className="personalh1">Personal information</h1>
                    
                    {/* === Bagian Full Name (Logika Benar) === */}
                    {!editMode.fullName ? (
                        <div className="info-item">
                            <div><label>Full name</label><span>{currentUser.firstName} {currentUser.lastName}</span></div>
                            <button onClick={() => handleEdit('fullName')} className="action-link">Edit</button>
                        </div>
                    ) : (
                        <div className="edit-form">
                            <label>Full name</label>
                            <div className="form-inputs"><div className="input-group"><label htmlFor="firstName">First name</label><input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} /></div><div className="input-group"><label htmlFor="lastName">Last name</label><input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} /></div></div>
                            <div className="form-actions"><button onClick={() => handleSave('fullName')} className="save-button">Save</button><button onClick={() => handleCancel('fullName')} className="cancel-link">Cancel</button></div>
                        </div>
                    )}
                    
                    {/* === Bagian Email (Logika Benar) === */}
                    {!editMode.email ? (
                         <div className="info-item">
                            <div><label>Email</label><span>{currentUser.email}</span></div>
                            <button onClick={() => handleEdit('email')} className="action-link">Edit</button>
                        </div>
                    ) : (
                        <div className="edit-form">
                             <label>Email</label>
                            <div className="form-inputs"><div className="input-group"><label htmlFor="email">Email address</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /></div></div>
                            <div className="form-actions"><button onClick={() => handleSave('email')} className="save-button">Save</button><button onClick={() => handleCancel('email')} className="cancel-link">Cancel</button></div>
                        </div>
                    )}
                   
                    {/* === Bagian Phone Number (Logika Benar) === */}
                    {!editMode.phone ? (
                        <div className="info-item">
                            <div><label>Phone number</label><span>{currentUser.phone || 'Not provided'}</span></div>
                            <button onClick={() => handleEdit('phone')} className="action-link">{currentUser.phone ? 'Edit' : 'Add'}</button>
                        </div>
                    ) : (
                         <div className="edit-form">
                            <label>Phone number</label>
                            <div className="form-inputs"><div className="input-group"><label htmlFor="phone">Phone number</label><input type="tel" id="phone" name="phone" value={formData.phone || ''} onChange={handleChange} placeholder="e.g., +62 812 3456 7890" /></div></div>
                            <div className="form-actions"><button onClick={() => handleSave('phone')} className="save-button">Save</button><button onClick={() => handleCancel('phone')} className="cancel-link">Cancel</button></div>
                        </div>
                    )}

                    {/* === Bagian Date of Birth (Logika Benar) === */}
                    {!editMode.dob ? (
                         <div className="info-item">
                            <div><label>Date of birth</label><span>{currentUser.dob || 'Not provided'}</span></div>
                            <button onClick={() => handleEdit('dob')} className="action-link">{currentUser.dob ? 'Edit' : 'Add'}</button>
                        </div>
                    ) : (
                         <div className="edit-form">
                            <label>Date of birth</label>
                            <div className="form-inputs"><div className="input-group"><label htmlFor="dob">Date of birth</label><input type="date" id="dob" name="dob" value={formData.dob || ''} onChange={handleChange} /></div></div>
                            <div className="form-actions"><button onClick={() => handleSave('dob')} className="save-button">Save</button><button onClick={() => handleCancel('dob')} className="cancel-link">Cancel</button></div>
                        </div>
                    )}

                    {/* === Bagian Home Town (Logika Benar) === */}
                    {!editMode.hometown ? (
                        <div className="info-item">
                            <div><label>Home town</label><span>{currentUser.hometown || 'Not provided'}</span></div>
                            <button onClick={() => handleEdit('hometown')} className="action-link">{currentUser.hometown ? 'Edit' : 'Add'}</button>
                        </div>
                    ) : (
                        <div className="edit-form">
                            <label>Home town</label>
                            <div className="form-inputs"><div className="input-group"><label htmlFor="hometown">Home town</label><input type="text" id="hometown" name="hometown" value={formData.hometown || ''} onChange={handleChange} placeholder="e.g., Jakarta, Indonesia" /></div></div>
                            <div className="form-actions"><button onClick={() => handleSave('hometown')} className="save-button">Save</button><button onClick={() => handleCancel('hometown')} className="cancel-link">Cancel</button></div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default ProfilePage;