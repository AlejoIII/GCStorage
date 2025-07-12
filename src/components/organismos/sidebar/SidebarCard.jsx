import styled from "styled-components";
import { v } from "../../../styles/variables";
import { Btnsave } from "../../moleculas/Btnsave.jsx";

export function SidebarCard() {
return (
    <Container>
        <span className="icon">{<v.iconoayuda />}</span>
        <div className="cardContent">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <h3>Cerrar sesión</h3>
            <div className="contentBtn">
                <Btnsave titulo="Cerrar..." bgcolor="#f8f2fd" />
            </div>
        </div>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: center;
    position: relative;

        .icon {
            position: absolute;
            top: -8px;
            right: 50%;
            transform: translate(50%);
            font-size: 3rem;
            border-radius: 50%;
            z-index: 100;
        }
        .cardContent {
            position: relative;
            padding: 1rem;
            background: ${( props ) => props.theme.bgS};
            border-radius: 10px;
            overflow: hidden;
        }
        .circle1,
        .circle2 {
            position: absolute;
            border-radius: 50%;
            background: ${( props ) => props.theme.whiteBg};
            opacity: 0.7;
        }
        .circle1 {
            width: 100px;
            height: 100px;
            top: -50px;
            left: -50px;
        }
        .circle2 {
            width: 130px;
            height: 130px;
            bottom: -80px;
            right: -70px;
        }
        h3 {
            font-size: 1.2rem;
            margin-top: 1rem;
            padding: 1rem 0;
            font-weight: 800;
            color: #000;
        }
        .contentBtn {
            position: relative;
            margin-left: 8px;
        }
    }
`;