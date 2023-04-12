import React from 'react';
import MailLayout from './mail-layout';
import { getKamcoList } from '../parser/public-auction';

export default function AutoMailingPage() {
  getKamcoList();
  return (
    <div>
      <MailLayout />
    </div>
  );
}
