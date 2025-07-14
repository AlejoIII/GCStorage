import styled from "styled-components";
import { v } from "../../styles/variables.jsx";
import { NavLink } from "react-router-dom";
import { ToggleTema } from "./sidebar/ToggleTema.jsx";
import { SidebarCard } from "./sidebar/SidebarCard.jsx";
import { Icon } from "@iconify/react";
import {LinksArray, SecondarylinksArray} from "../../utils/staticdata.jsx";
import React, { useState } from "react";

 export function Menu() {
  const [click, setclick] = useState(false);
    
   return (
     <Container>
        <NavBar>
            <section>
                <MenuItem onClick={() => setclick(!click)}>
                        <label className={click?"toggle active": "toggle"} 
                        for="checkbox">
                            <div class="bars" id="bar1"></div>
                            <div class="bars" id="bar2"></div>
                            <div class="bars" id="bar3"></div>
                        </label>
                </MenuItem>
            </section>
            <MenuContainer $click={click.toString()}>
              {LinksArray.map(({ icon, label, to }) => (
                <div onClick={() =>setclick(!click)} 
                className="LinkContainer" key={label}>
                  <NavLink to={to} className="Links">
                    <div className="Linkicon">
                      <Icon icon={icon} />
                    </div>
                    <span>{label}</span>
                  </NavLink>
                </div>
              ))}
              <Divider />
              {SecondarylinksArray.map(({ icon, label, to, color }) => (
                <div onClick={() =>setclick(!click)} 
                className="LinkContainer" key={label}>
                  <NavLink to={to} className="Links">
                    <div className="Linkicon">
                      <Icon icon={icon} color={color} />
                    </div>
                    <span>{label}</span>
                  </NavLink>
                </div>
              ))}
              <ToggleTema />
              <Divider />
            </MenuContainer>
        </NavBar>
     </Container>
   );
 }

 const Container = styled.div`s
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${(props) =>props.theme.bgtotal};
    color: ${({theme}) => theme.text};
    width: 100%;
 `;

 const NavBar = styled.nav`
    width: 100%;        
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;    
 `;

 const MenuItem = styled.span`
    position: fiexd;
    top: 2rem;
    z-index: 100;

    #checkbox {
        display: none;
    }

    .toggle {
        position: relative;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transition-duration: .5s;
        &.active{
            transition-duration: .5s;
            transform: rotate(180deg);
          .bars {
            position: absolute;
            transition-duration: .5s;
          }
          #bar2 {
            transform: scaleX(0);
            transition-duration: .5s;
          }
          #bar1 {
            width: 100%;
            transform: rotate(45deg);
            transition-duration: .5s;
          }
          #bar3 {
            width: 100%;
            transform: rotate(-45deg);
            transition-duration: .5s;
          }
        }
    }

    .bars {
        width: 100%;
        height: 4px;
        background-color: rgb(176, 92, 255);
        border-radius: 4px;
    }

    #bar2 {
        transition-duration: .8s;
    }

    #bar1,#bar3 {
        width: 70%;
    }
  `;

  const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
      list-style: none;
      z-index: 10;
`;
  const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg4};
    margin: ${() => v.lgSpacing} 0;
  `;