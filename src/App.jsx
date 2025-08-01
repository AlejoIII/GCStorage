import styled, { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './Context/AuthContext'
import { MyRoutes } from './routers/routers.jsx'
import { Device } from './styles/breakpoint.jsx'
import { createContext, useState } from 'react'
import {Light, Dark} from './styles/themes.jsx'
import { Sidebar } from './components/organismos/sidebar/sidebar.jsx'
import { Menu } from './components/organismos/Menu.jsx'

export const ThemeContext = createContext(null);

function App() {
  const [themeuse, setTheme] = useState("dark")
  const theme = themeuse ==="light"? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <Container className={sidebarOpen ? "active" : ""}>
            <section className="ContentSidebar">
            <Sidebar state={sidebarOpen} setState={()=>setSidebarOpen(!sidebarOpen)}/>
            </section>
            <section className="ContentMenuambur">
            <Menu/>
            </section>
            <section className="ContentRoutes">
              <MyRoutes />
            </section>
          </Container>
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider> 
    </>
  )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({theme})=>theme.bgtotal};
  .ContentSidebar {
    display: none;
  }
  .ContentMenuambur {
    display: block;
    position: absolute;
    left: 20px;
  }
    @media ${Device.tablet} {
      grid-template-columns: 65px 1fr;
        &.active{
          grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuambur {
      display: none;
    }
  } 
  .ContentRoutes {
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet} {
      grid-column: 2;
    }
  }
`




export default App
