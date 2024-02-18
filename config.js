const settings = {
    token: "", // Bot Token
    guildid: "", // Guild ID
    activity: "", // Activity Message
    activitytype: "PLAYING", // WATCHING, LISTENING, PLAYING, STREAMING
    staffId: "", // Staff Role ID
    maxticketsopen: 3, // Max Tickets per User
}

const messages = {
    join: {
        enabled: true,
        channel: "1200802303003852920",
        title: "Herzlich Willkommen",
        message: "Hallo {usermention},\n\nBitte lese dir die <#1200802354749001728> und das <#1200802458956484678> durch!\n\nBei Fragen kannst du gerne ein ⁠<#1200820057769512980> erstellen!\n\n**Mit freundlichen Grüßen**\n\> Dein Düsseldorf Team",
        color: "#0462f0",
        image: {
            enabled: true,
            link: "https://tom.isfucking.pro/2dUDLW.gif"
        },
         banner: {
            enabled: true,
            link: "https://tom.isfucking.pro/aTKlw5.webp"
        },
        author: {
            enabled: true,
            text: "Düsseldorf | Roleplay",
            img: "https://tom.isfucking.pro/2dUDLW.gif"
        },
        footer: {
            enabled: true,
            text: "Düsseldorf | Roleplay Team",
            img: "https://tom.isfucking.pro/2dUDLW.gif"
        },
        timestamp: true,
    },
    boost: {
        enabled: true,
        channel: "1201182813911793775",
        title: "Düsseldorf RP wurde geboostet!",
        message: "> Danke {usermention}, das du **Düsseldorf RP** geboostet hast, danke dir haben wir jetzt {boostcount} Boosts!",
        color: "#0462f0",
        image: {
            enabled: true,
            link: "https://tom.isfucking.pro/2dUDLW.gif"
        },
        banner: {
            enabled: true,
            link: "https://tom.isfucking.pro/qhHmro.webp"
        },
        author: {
            enabled: true,
            text: "Düsseldorf | Roleplay",
            img: "https://tom.isfucking.pro/2dUDLW.gif"
        },
        footer: {
            enabled: true,
            text: "Düsseldorf | Roleplay Team",
            img: "https://tom.isfucking.pro/2dUDLW.gif"
        },
        timestamp: true,
    },
    leave: {
        enabled: true,
        channel: "1200828573267808356",
        title: "Verlassen",
        message: "Auf Wiedersehen {usermention}, jetzt sind wir nur noch {servermembercount} Mitglieder!",
        color: "#0462f0",
        image: {
            enabled: true,
            link: "https://tom.isfucking.pro/NSiG3M.png"
        },
        banner: {
            enabled: true,
            link: "https://tom.isfucking.pro/2cSFI7.webp"
        },
        author: {
            enabled: true,
                text: "Fare | Service ",
            img: "https://tom.isfucking.pro/XR1vgh.gif"
        },
        footer: {
            enabled: true,
            text: "Fare | Service Team",
            img: "https://tom.isfucking.pro/XR1vgh.gif"
        },
        timestamp: true,
    },
}

const commands = [
    // To add a new command, copy the following code and paste it below the last command
    {
        name: "Paypal",
        description: "Sende dem User die PayPal Informationen",
        options: [
            {
                name: "ammount",
                description: "The ammount the user hast to pay",
                type: "INTEGER",
                required: true,
            }
        ],
        response: {
            title: "Paypal-Betrag",
            description: "Betrag: {ammount}€\nEmail: paypal@g-dev.de\n\nBitte nach der Zahlung die Zahlungsbestätigung in das Ticket senden.",
            color: "#2fb0e2",
            image: {
                enabled: true,
                link: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754",
            },
            banner: {
                enabled: false,
                link: "",
            },
            author: {
                enabled: false,
                text: "G-Cars",
                img: false            
            },
            footer: {
                enabled: true,
                text: "Düsseldorf | Roleplay Team",
                img: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754"
            },
            timestamp: false,
        }
    },
    {
        name: "Paysafe",
        description: "Show Payment Information",
        options: [
            {
                name: "ammount",
                description: "The ammount the user hast to pay",
                type: "INTEGER",
                required: true,
            }
        ],
        response: {
            title: "Paysafe",
            description: "Betrag: {ammount}€\n\nBitte den Code via DM an <@986258038010834985> senden.",
            color: "#2fb0e2",
            image: {
                enabled: true,
                link: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754",
            },
            banner: {
                enabled: false,
                link: "",
            },
            author: {
                enabled: false,
                text: "G-Cars",
                img: false            
            },
            footer: {
                enabled: true,
                text: "Copyright © 2023 G-Cars",
                img: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754"
            },
            timestamp: false,
        }
    }
]

const verify = {
    enabled: true,
    role: "944213125786402824",
    title: "Verifizieren",
    description: `Um gesamten Zugriff auf den Discord zu erhalten benötigen wir das akzeptieren des <#944213125836734583> das kannst du akzeptieren in dem du auf den verifizieren Button klickst!`,
    color: "#2fb0e2",
    image: {
        enabled: true,
        link: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754",
    },
    banner: {
        enabled: false,
        link: "https://cdn-longterm.mee6.xyz/plugins/embeds/images/944213125786402816/b0f08636feb1288d808b9982dd40d07ccbb21b1f31441375168120097e70b375.png",
    },
    author: {
        enabled: true,
        text: "G-Cars",
        img: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754"
    },
    footer: {
        enabled: true,
        text: "Copyright © 2023 G-Cars",
        img: "https://media.discordapp.net/attachments/1056706748444061839/1056707066145808444/GDEV2.png?width=754&height=754"
    },
    timestamp: false,
    button: {
        name: "Verifizieren",
        style: "PRIMARY",
        emoji: "✅",
        customId: "verify", // Do not change this
    }
}

const ticketmenu = {
    title: "Du brauchst Hilfe?",
    description: "Hast du Probleme oder Fragen? Wir helfen dir gerne!\n\n**Wie du ein Support-Ticket öffnest**\n\> Klicke einfach auf den Knopf unter dieser Nachricht um ein Ticket zu erstellen!",
    placeholder: "Kategorie auswählen",
    color: "#0462f0",
    image: {
        enabled: true,
        link: "https://tom.isfucking.pro/2dUDLW.gif"
    },
    banner: {
        enabled: true,
        link: "https://tom.isfucking.pro/mWMmc1.webp"
    },
    author: {
        enabled: true,
        text: "Düsseldorf | Roleplay",
        img: "https://tom.isfucking.pro/2dUDLW.gif"
    },
    footer: {
        enabled: true,
        text: "Düsseldorf | Roleplay Team",
        img: "https://tom.isfucking.pro/2dUDLW.gif"
    },
    timestamp: true,
}

const categorys = [
    // To add more categorys, just copy the code below and paste it above the last category.
    {
        name: "Support",
        description: "Wenn du fragen hast mach ein Ticket!",
        emoji: "❔",
        categoryid: "1200827688768770078",
        ticket: {
            name: "support-{username}",
            topic: "{userid}",
            pinguser: true,
            pingstaff: false, // false to disable
            perms: "1200803848202223756",
            emebd: {
                title: "Support Ticket",
                description: "Hallo {userping},\n wir werden uns so schnell wie möglich um dein Anliegen kümmern.\n\nBitte warte auf eine Antwort von einem unserer Supporter.\n\nMit freundlichen Grüßen,\ndas Support Team",
                color: "#0462f0",
                image: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/2dUDLW.gif",
                },
                banner: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/mWMmc1.webp",
                },
                fields: [
                    {
                        name: "Category",
                        value: "{category}",
                        inline: true
                    },
                    {
                        name: "User",
                        value: "{userping}",
                        inline: true
                    }
                ],
                author: {
                    enabled: true,
                    text: "Düsseldorf | Roleplay",
                    img: "https://tom.isfucking.pro/2dUDLW.gif"
                },
                footer: {
                    enabled: true,
                    text: "Düsseldorf | Roleplay Team",
                    img: "https://tom.isfucking.pro/2dUDLW.gif"
                },
                timestamp: true
            }
        }
    },
    {
        name: "Bewerbungs",
        description: "Öffne ein Ticket wenn du dich bewerben willst",
        emoji: "📑",
        categoryid: "1200828056974143509",
        ticket: {
            name: "bewerbung-{username}",
            topic: "{userid}",
            pinguser: true,
            pingstaff: false, // false to disable
            perms: "1200803848202223756",
            emebd: {
                title: "Bewerbungs Ticket",
                description: "Hallo {userping},\n wir werden uns so schnell wie möglich um dein Anliegen kümmern.\n\nBitte warte auf eine Antwort von einem unserer Supporter.\n\nMit freundlichen Grüßen,\ndas Support Team",
                color: "1200803843315859548",
                image: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/2dUDLW.gif",
                },
                banner: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/mWMmc1.webp",
                },
                fields: [
                    {
                        name: "Category",
                        value: "{category}",
                        inline: true
                    },
                    {
                        name: "User",
                        value: "{userping}",
                        inline: true
                    }
                ],
                author: {
                    enabled: true,
                    text: "Düsseldorf | Roleplay",
                    img: "https://tom.isfucking.pro/2dUDLW.gif"
                },
                footer: {
                    enabled: true,
                    text: "Düsseldorf | Roleplay Team",
                    img: "https://tom.isfucking.pro/2dUDLW.gif"
                },
                timestamp: true
            }
        }
    },
    {
        name: "Partnerschaft",
        description: "Wenn du eine Partnerschaft willst mach ein Ticket!",
        emoji: "👥",
        categoryid: "1200827904033050764",
        ticket: {
            name: "partner-{username}",
            topic: "{userid}",
            pinguser: true,
            pingstaff: false, // false to disable
            perms: "1200803843315859548",
            emebd: {
                title: "Partnerschaft Ticket",
                description: "Hallo {userping},\n wir werden uns so schnell wie möglich um dein Anliegen kümmern.\n\nBitte warte auf eine Antwort von einem unserer Supporter.\n\nMit freundlichen Grüßen,\ndas Support Team",
                color: "#0462f0",
                image: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/2dUDLW.gif",
                },
                banner: {
                    enabled: true,
                    link: "https://tom.isfucking.pro/mWMmc1.webp",
                },
                fields: [
                    {
                        name: "Category",
                        value: "{category}",
                        inline: true
                    },
                    {
                        name: "User",
                        value: "{userping}",
                        inline: true
                    }
                ],
                author: {
                    enabled: true,
                    text: "Düsseldorf | Roleplay",
                    img: "https://tom.isfucking.pro/2dUDLW.gif"
                },
                footer: {
                    enabled: true,
                    text: "Düsseldorf | Roleplay Team",
                    img: "https://tom.isfucking.pro/2dUDLW.gif"
                },
                timestamp: true
           }
        }
    }
]

const feedback = {
    enabled: true,
    channel: "1200822367623069766",
    embed: {
        title: "New Feedback!",
        description: "{feedback}",
        color: "#0462f0",
        fields: [
            {
                name: "Feedback in Sternen",
                value: "{stars}",
                inline: true
            },
            {
                name: "User",
                value: "{userping}",
                inline: true
            }
        ],
        image: {
            enabled: true,
            link: "{profilepicture}"
        },
        author: {
            enabled: true,
            text: "Düssledorf | Roleplay",
            img: "https://tom.isfucking.pro/2dUDLW.gif"
        },
        footer: {
            enabled: true,
            text: "Feedback von {username}",
            img: "{profilepicture}"
        },
        timestamp: true
    },
    feedbackdone: {
        title: "Feedback",
        description: "Danke für dein Feedback!",
        color: "#0462f0",
        banner: {
            enabled: true,
            link: "https://tom.isfucking.pro/v0EX7q.webp",
        },
        timestamp: true
    }
}

const logs = {
    ticketopen: {
        enabled: true,
        channel: "1200828341490556938",
            title: "Ticket wurde geöffnet",
            description: "Ticket wurde von {username} geöffnet",
            color: "#0462f0",
            fields: [
                {
                    name: "Ticket",
                    value: "{ticketname}",
                    inline: true
                },
                {
                    name: "User",
                    value: "{userping}",
                    inline: true
                },
                {
                    name: "Category",
                    value: "{category}",
                    inline: true
                }
            ],
            timestamp: true

    },
    ticketclose: {
        enabled: true,
        transscripts: true,
        sendTransscriptDM: true,
        channel: "1200828387338502226",
            title: "Ticket wurde geschlossen",
            description: "Ticket wurde von {username} geschlossen",
            color: "#0462f0",
            fields: [
                {
                    name: "Ticket",
                    value: "{ticketname}",
                    inline: true
                },
                {
                    name: "User",
                    value: "{userping}",
                    inline: true
                },
                {
                    name: "Category",
                    value: "{category}",
                    inline: true
                }
            ],
            timestamp: true
    },
    verify: {
        enabled: true,
        channel: "1077321245160378409",
            title: "User wurde verifiziert",
            description: "User {username} hat sich verifiziert",
            color: "#9e11d5",
            timestamp: true
    },
    feedback: {
        enabled: true,
        channel: "1200828462303285308",
            title: "Feedback",
            description: "User {username} hat ein Feedback geschrieben",
            color: "#0462f0",
            fields: [
                {
                    name: "Feedback",
                    value: "{feedback}",
                    inline: true
                },
                {
                    name: "User",
                    value: "{userping}",
                    inline: true
                }
            ],
            timestamp: true
    }
}

module.exports = { settings, categorys, messages, commands, ticketmenu, feedback, logs, verify };
