import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar />
          <Typography.Title level={2} className='logo' >
            <Link to="/">HashCrypt</Link>
          </Typography.Title>
        </div>
      </div>
    </div>
  )
}

export default Navbar
