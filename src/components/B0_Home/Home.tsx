import React, {FC} from "react";
import style from "./home.module.scss"
import background from "../../assets/gif/home-back.gif";
import {SocialIcon} from "../common/SocialIcon/SocialIcon";
import enterD from "../../assets/svg/buttons/enter-d.svg";
import enterH from "../../assets/svg/buttons/enter-h.svg";
import enterC from "../../assets/svg/buttons/enter-c.svg";
import {ButtonLink} from "../common/ButtonLink/ButtomLink";

interface IHome {
    onClickHandler: () => void
}

export const Home: FC<IHome> = ({onClickHandler}) => {
    return (
        <section className={style.home}
                 style={{backgroundImage: `url(${background})`}}
        >
            <div className={style.innerWrapper}>
                <h1 className={style.title}>Only a game away of living debt free</h1>

                <ButtonLink imgDefault={enterD}
                            imgHover={enterH}
                            imgClick={enterC}
                            className={style.enterButton}
                            onClickHandler={onClickHandler}
                />

                <div className={style.icons}>
                    {
                        ["twitter", "discord", "metamask"].map(icon => <SocialIcon key={icon}
                                                                                   icon={icon}
                                                                                   className={style.icon}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}