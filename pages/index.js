import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import "../customs/styles.less"

import {
  Calendar,
} from 'antd';

const onPanelChange = (value, mode) => {
  console.log(value, mode);
}

const Home = () => (
  <div>
    <Head title="Home" />
    <div className="example-less">Calendar by Ant Design</div>
    <Calendar onPanelChange={onPanelChange} />
  </div>
)

export default Home
