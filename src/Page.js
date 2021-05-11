// React Import
import React from 'react';
// Style Import
import './styles/Page.css';

function Page({ children }) {
	return <section className='page'>{children}</section>;
}

export default Page;
