import reflex as rx
import link_bio.constants as const
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size

def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button("Twitch",
            "Directos de lunes a viernes", 
            "icons/linkedin.svg",
            const.TWITCH_URL
        ),
        link_button("YouTube", 
            "Tutoriales semanales",
            "icons/linkedin.svg",
            const.YOUTUBE_URL
        ),
        link_button("Discord",
            "El chat de la comunidad",
            "icons/linkedin.svg",
            const.DISCORD_URL 
            
        ),
        title("Contacto"),
        link_button("Email",
            const.EMAIL, 
            "icons/linkedin.svg",
            f"mailto:{const.EMAIL}",
        ),
        link_button("YouTube", 
            "Tutoriales semanales",
            "icons/linkedin.svg",
            const.YOUTUBE_URL
        ),
        link_button("Discord",
            "El chat de la comunidad",
            "icons/linkedin.svg", 
            const.DISCORD_URL
        ),
        spacing=Size.DEFAULT.value,
        width="100%",  
        )