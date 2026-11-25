package com.example.a0042_fleurista.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = RosePrimaryDark,
    secondary = SageSecondaryDark,
    tertiary = WarmGoldTertiary,
    background = DarkFloralBackground,
    surface = DarkFloralSurface,
    onPrimary = Color(0xFF5E1133),
    onSecondary = Color(0xFF1A3725),
    onBackground = Color(0xFFEDE0E3),
    onSurface = Color(0xFFEDE0E3)
)

private val LightColorScheme = lightColorScheme(
    primary = RosePrimary,
    onPrimary = Color.White,
    primaryContainer = RoseContainer,
    onPrimaryContainer = OnRoseContainer,
    secondary = SageSecondary,
    onSecondary = Color.White,
    secondaryContainer = SageContainer,
    tertiary = WarmGoldTertiary,
    background = WarmCreamBackground,
    surface = WarmSurface,
    onBackground = Color(0xFF22191C),
    onSurface = Color(0xFF22191C)
)

@Composable
fun _0042_FLEURISTATheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = false,
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
