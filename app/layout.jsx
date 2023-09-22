import Navbar from '@components/Navbar'
import '@styles/global.css'
import NextAuthProvider from './Providers'

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
          <NextAuthProvider>
           <div className='max-w-3xl mx-auto'>
            <Navbar/>
            {children}
            </div>
            </NextAuthProvider>
        </body>
    </html>
  )
}

export default RootLayout