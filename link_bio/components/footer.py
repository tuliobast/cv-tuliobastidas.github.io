import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size 
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor

def footer() -> rx.Component():
    return rx.vstack(
        rx.image(src = "favicon.ico"),
        rx.text(
            rx.span(
                f"Powered by Tuliobast 2021-{datetime.date.today().year}", 
                color = Color.PRIMARY.value
            ),
        font_size = Size.MEDIUM.value,
        margin_top = Size.ZERO.value,
        color = TextColor.FOOTER.value,
        ),
        margin_top = Size.MEDIUM.value,
        padding_bottom = Size.BIG.value,
        spacing = Size.DEFAULT.value
    )