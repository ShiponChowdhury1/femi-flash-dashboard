'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h3>
        <p className="text-sm text-gray-500 mb-6">Last updated: December 8, 2025</p>

        <div className="space-y-6 text-sm text-gray-700">
          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h4>
            <p className="mb-2">We collect several types of information from and about users of our platform:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Payment and billing information</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use Your Information</h4>
            <p className="mb-2">We use the information we collect for various purposes:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To process your transactions and send related information</li>
              <li>To send you technical notices, updates, and support messages</li>
              <li>To respond to your comments, questions, and requests</li>
              <li>To monitor and analyze trends, usage, and activities</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To personalize and improve your experience</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Information Sharing</h4>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share
              generic aggregated demographic information not linked to any personal identification information
              with our business partners and trusted affiliates.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Data Security</h4>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. This includes internal reviews of our data collection,
              storage, and processing practices, as well as physical security measures.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Data Retention</h4>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              privacy policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6. Your Rights</h4>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7. Cookies</h4>
            <p>
              We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
              You can choose to disable cookies through your browser settings, but this may affect your ability
              to use certain features of our platform.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">8. Children's Privacy</h4>
            <p>
              Our platform is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">9. Changes to This Policy</h4>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">10. Contact Us</h4>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@femiflash.com
              <br />
              Address: FemiFlash HQ, New York, USA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
