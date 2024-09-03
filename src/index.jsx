import {Component} from "react";
import {TelegramSvg, XSvg, DiscordSvg} from './global/assets/images/svg/svg_items.jsx'

import "./index.css";
import "./global/css/fonts.css";

import coin from "./global/assets/images/coin.gif";


export default class App extends Component {
    render() {
        return (
            <div className={`coming-soon-main-container`}>
                <img
                    src={coin}
                    alt={`COIN`}
                />
                <h1>Coming soon</h1>
                <h2>For now you can STAY TUNED in our socials :P </h2>
                <div className={`coming-soon-socials-container`}>
                    <a
                        href={`https://t.me/anti_social_community`}
                        target={`_blank`}
                    >
                        <TelegramSvg/>
                    </a>
                    <a
                        href={`https://x.com/AntiSocial_cmty`}
                        target={`_blank`}
                    >
                        <XSvg/>
                    </a>
                    <a
                        href={`https://discord.gg/6FGf4vMdHy`}
                        target={`_blank`}
                    >
                        <DiscordSvg/>
                    </a>
                </div>
            </div>
        );
    }
}
