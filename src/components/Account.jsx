import React from 'react';

const Account = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 py-12">
      {/* Breadcrumb and Welcome Message */}
      <div className="flex justify-between items-center mb-16 text-sm">
        <nav className="text-gray-400">Home / <span className="text-black">My Account</span></nav>
        <p>Welcome! <span className="text-[#DB4444]">Md Rimel</span></p>
      </div>

      <div className="flex flex-col md:flex-row gap-20">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="font-bold mb-4">Manage My Account</h3>
            <ul className="pl-6 space-y-2 text-gray-500">
              <li className="text-[#DB4444] cursor-pointer">My Profile</li>
              <li className="hover:text-[#DB4444] cursor-pointer">Address Book</li>
              <li className="hover:text-[#DB4444] cursor-pointer">My Payment Options</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">My Orders</h3>
            <ul className="pl-6 space-y-2 text-gray-500">
              <li className="hover:text-[#DB4444] cursor-pointer">My Returns</li>
              <li className="hover:text-[#DB4444] cursor-pointer">My Cancellations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold cursor-pointer">My Wishlist</h3>
          </div>
        </aside>

        {/* Edit Profile Form */}
        <main className="flex-1 shadow-sm p-8 rounded-sm">
          <h2 className="text-[#DB4444] text-xl font-medium mb-8">Edit Your Profile</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm">First Name</label>
                <input type="text" placeholder="Md" className="bg-[#F5F5F5] p-3 rounded outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Last Name</label>
                <input type="text" placeholder="Rimel" className="bg-[#F5F5F5] p-3 rounded outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm">Email</label>
                <input type="email" placeholder="rimel1111@gmail.com" className="bg-[#F5F5F5] p-3 rounded outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Address</label>
                <input type="text" placeholder="Kingston, 5236, United State" className="bg-[#F5F5F5] p-3 rounded outline-none" />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <label className="text-sm">Password Changes</label>
              <input type="password" placeholder="Current Password" className="bg-[#F5F5F5] p-3 rounded outline-none" />
              <input type="password" placeholder="New Password" className="bg-[#F5F5F5] p-3 rounded outline-none" />
              <input type="password" placeholder="Confirm New Password" className="bg-[#F5F5F5] p-3 rounded outline-none" />
            </div>

            <div className="flex justify-end gap-6 items-center pt-4">
              <button type="button" className="text-black">Cancel</button>
              <button type="submit" className="bg-[#DB4444] text-white px-12 py-4 rounded font-medium">Save Changes</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Account;