import React from 'react';

const ContactDetails: React.FC = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg border border-grey-400 w-full">
      <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
      <p className="mb-4">
        <strong>Address:</strong><br />
        1234 Street Name<br />
        City, State, ZIP Code
      </p>
      <p className="mb-4">
        <strong>Phone:</strong><br />
        +919876543210<br />
        0124-1234567
      </p>
      <p className="mb-4">
        <strong>Email:</strong><br />
        info@marksmantech.com
      </p>
      <p className="mb-4">
        <strong>Working Hours:</strong><br />
        Monday - Friday: 9:00 AM - 6:00 PM<br />
        Saturday - Sunday: Closed
      </p>
    </div>
  );
};

export default ContactDetails;
