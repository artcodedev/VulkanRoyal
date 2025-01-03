'use client'

import React, { useEffect, useState } from 'react';

const Faq = () => {


    const [ariaExpanded, setAriaExpanded] = React.useState<boolean>(true);
    const [collapse, setCollapse] = React.useState<boolean>(true);

    const [ active, setActive ] = React.useState<String>('');

    const faq = [
        {
            title: "1. Что такое «Royal casino»?",
            href: "method-1-1",
            data: [
                "Бонус – это дополнительные деньги для игры, которые начисляются Вам в качестве подарка от нашего клуба. Для того, чтобы вывести бонусные деньги, его необходимо отыграть. Бонус Вы можете получить по разным акциям нашего клуба, которые проходят как на регулярной основе, так и по особым датам. Советуем также следить за рассылками от нашего клуба, в которых очень часто приходят заманчивые предложения.",
                "Бонус – это дополнительные деньги для игры, которые начисляются Вам в качестве подарка от нашего клуба. Для того, чтобы вывести бонусные деньги, его необходимо отыграть. Бонус Вы можете получить по разным акциям нашего клуба, которые проходят как на регулярной основе, так и по особым датам. Советуем также следить за рассылками от нашего клуба, в которых очень часто приходят заманчивые предложения."
            ]
        },
        {
            title: "1. Что такое «Royal casino»?",
            href: "method-1-2",
            data: ["Бонус – это дополнительные деньги для игры, которые начисляются Вам в качестве подарка от нашего клуба. Для того, чтобы вывести бонусные деньги, его необходимо отыграть. Бонус Вы можете получить по разным акциям нашего клуба, которые проходят как на регулярной основе, так и по особым датам. Советуем также следить за рассылками от нашего клуба, в которых очень часто приходят заманчивые предложения."]
        },
        {
            title: "1. Что такое «Royal casino»?",
            href: "method-1-3",
            data: ["Бонус – это дополнительные деньги для игры, которые начисляются Вам в качестве подарка от нашего клуба. Для того, чтобы вывести бонусные деньги, его необходимо отыграть. Бонус Вы можете получить по разным акциям нашего клуба, которые проходят как на регулярной основе, так и по особым датам. Советуем также следить за рассылками от нашего клуба, в которых очень часто приходят заманчивые предложения."]
        }
    ]


    let show_faq = (e: React.MouseEvent<HTMLElement>) => {

        const href: String = e.currentTarget.attributes[2].value.replace("#", "");

        setActive(active === href ? '' : href);

    }


    return (
        <>
            <div>

                <div id="accordion">
                    <h1>
                        <span>Общие вопросы</span>
                    </h1>

                    {faq.map((e, i) => (

                        <div className="cnt-text faq-item panel panel-default">

                            <a data-toggle="collapse" data-parent="#accordion" href={`#${e.href}`} className="faq-item__title collapsed" aria-expanded={active == e.href ? "true" : "false"} onClick={show_faq}>{e.title}</a>

                            <div  className={active == e.href ? "collapse in" : "collapse"}>
                                {e.data.map((m) => (<p>{m}</p>))}
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Faq;