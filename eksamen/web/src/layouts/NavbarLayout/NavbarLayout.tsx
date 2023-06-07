import { Link, routes } from '@redwoodjs/router'


type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return <>
<div className='pl-4 pt-2 uppercase flex'>
  <h1>
    <Link to={routes.home()}>Home</Link>
  </h1>
  <h1 className='pl-4'>
    <Link to={routes.about()}>about</Link>
  </h1>
</div>


  <main>
  {children}
  </main>

  </>
}

export default NavbarLayout
