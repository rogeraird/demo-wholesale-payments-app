import React from 'react';
import PropTypes from 'prop-types';
import { gatherCurrencySymbol } from '../../utils';

const AccountTotal = ({ total, currency }) => {
  return (
    <div className='border bg-white border-pink-500 shadow-md hover:shadow-lg p-4 rounded-lg'>
      <div className='mb-2'>
        All accounts balance in{' '}
        <span className=' bg-red-50 rounded-lg px-2 py-1 text-xs font-medium text-gray-500'>
          {currency}
        </span>
      </div>
      <div className='flex items-baseline justify-between'>
        <div className='text-2xl font-medium'>
          {gatherCurrencySymbol(currency)}
          {total}
        </div>
        <div className='text-green-600'>3.05%</div>
      </div>
      <div className='flex text-xs mt-7 justify-between'>
        <div className='flex gap-2'>
          <button className='py-2 px-3 bg-red-50 font-medium rounded-lg'>
            Exchange
          </button>
          <button className='py-2 px-3 bg-red-50 font-medium rounded-lg'>
            Add money
          </button>
        </div>
        <button className='py-2 px-3 bg-gradient-to-r from-pink-500 to-red-500  font-medium rounded-lg text-white'>
          Send Money
        </button>
      </div>
    </div>
  );
};

AccountTotal.propTypes = {
  total: PropTypes.number,
  currency: PropTypes.string,
};

export default AccountTotal;
