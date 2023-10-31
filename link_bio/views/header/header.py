import reflex as rx
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color as Color 
from link_bio.styles.colors import TextColor as TextColor 
import link_bio.constants as const 
import datetime

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name = "Tulio Bastiddas",
                size = "xl",
                src = "tulio.jpg",
                color = TextColor.BODY.value,
                bg = Color.CONTENT.value,
                padding = "2px",
                border = "4px",
                border_color = Color.PRIMARY.value,
            ),
            rx.vstack(
                rx.heading(
                    "Tulio Bastidas", 
                    size = "lg",
                ),
                rx.text(
                    "@tuliobast",
                    margin_top = Size.ZERO.value,
                    color = Color.PRIMARY.value,
                ),
                rx.hstack(
                    link_icon(
                        "icons/linkedin.svg",
                        const.LINKEDIN_URL 
                    ),
                    link_icon(
                        "icons/github.svg",
                        const.GITHUB_URL
                    ),
                    link_icon(
                        "icons/instagram.svg",
                        const.INSTAGRAM_URL
                    ),
                    spacing = Size.DEFAULT.value,  
                ),
                align_items = "start",
            ),
            spacing = Size.DEFAULT.value,
        ),
        rx.flex(
            info_text(
                f"+{experience()}", 
                "años de experiencia en RF"
            ),
            rx.spacer(),
            info_text(
                f"+{experience2()}", 
                "años de experiencia en Programación"
            ),
            rx.spacer(),
            info_text(
                f"+{experience3()}", 
                "años de experiencia en Fotografia"
            ),
            rx.spacer(),
            width = "100%",
        ),
        rx.text(
            f"""Soy un ingeniero de telecommunicaciones con mas de {experience()} años de esperiencia.
            Actualmente estoy desarrollandome como desarrollador full stack con Python desde hace {experience2()} años, trabajo freelancer.
            Acá podras encontrar todos los enlaces a mis proyectos. ¡Bienvenidos! 
            """,
            font_size = Size.MEDIUM.value,
            color = TextColor.BODY.value,
        ),
        spacing = Size.BIG.value,
        align_items ="start"
    )

def experience() -> int:
    return datetime.date.today().year - 2008

def experience2() -> int:
    return datetime.date.today().year - 2018

def experience3() -> int:
    return datetime.date.today().year - 2012