import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      {/* header */}
    <Header/>
    {/* main content */}
    <main className="">
      <Outlet/>
    </main>
    {/* footer */}
    <Footer/>
    </div>
  )
}

export default UserLayout
