'use client';

import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Terms of Use</h3>
        <p className="text-sm text-gray-500 mb-6">Last updated: December 8, 2025</p>

        <div className="space-y-6 text-sm text-gray-700">
          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h4>
            <p>
              By accessing and using the FemiFlash platform, you accept and agree to be bound by the
              terms and provision of this agreement. If you do not agree to abide by the above, please
              do not use this service.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Use License</h4>
            <p className="mb-2">
              Permission is granted to temporarily download one copy of the materials on FemiFlash's
              platform for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on FemiFlash's platform</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3. User Account</h4>
            <p>
              To access certain features of the platform, you must register for an account. You agree to
              provide accurate, current, and complete information during the registration process and to
              update such information to keep it accurate, current, and complete.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Disclaimer</h4>
            <p>
              The materials on FemiFlash's platform are provided on an 'as is' basis. FemiFlash makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness
              for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Limitations</h4>
            <p>
              In no event shall FemiFlash or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out
              of the use or inability to use the materials on FemiFlash's platform.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6. Revisions</h4>
            <p>
              The materials appearing on FemiFlash's platform could include technical, typographical, or
              photographic errors. FemiFlash does not warrant that any of the materials on its platform are
              accurate, complete, or current. FemiFlash may make changes to the materials contained on its
              platform at any time without notice.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7. Governing Law</h4>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
