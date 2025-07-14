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
                        <label className={click ? "toggle active": "toggle"} 
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

 const Container = styled.div`
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
    position: fixed;
    top: 2rem;
    z-index: 100;
    #checkbox {
        display: none;
    }

    .toggle {
        position: relative;
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition-duration: .5s;
        &.active{
            transition-duration: .5s;
            transform: rotate(180deg);
          .bars {
            color: ${({theme}) => theme.text};
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
        background-color: ${({theme}) => theme.text};
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
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    background: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};    
    backdrop-filter: blur(3px);
    transform: ${(props) => props.$click === "true" ? "translateX(0)" : "translateX(1000%)"};
    transition: all  0.3s ease;
    .LinkContainer {
        &:hover {
          background: ${(props) => props.theme.bgAlpha};
        }
      .Links {
        width: 100vw;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${(props) => props.theme.text};
        height: 80px;
        .Linkicon {
          padding: ${() => v.smSpacing} ${() => v.mdSpacing};
          display: flex;
          svg {
            font-size: 25px;
          }
        }
      }
    }
`;
  const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg4};
    margin: ${() => v.lgSpacing} 0;
  `;