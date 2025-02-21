import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
      {/* topbar */}
      <Topbar />
      {/* navbar */}
      <Navbar />
      {/* topbar */}
    </header>
  )
}

export default Header
