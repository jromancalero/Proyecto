-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-02-2022 a las 20:11:28
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoj`
--
CREATE DATABASE IF NOT EXISTS `proyectoj` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyectoj`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adressess`
--

DROP TABLE IF EXISTS `adressess`;
CREATE TABLE `adressess` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` int(11) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Muebles', NULL, NULL),
(2, 'Patas', NULL, NULL),
(3, 'Accesorios', NULL, NULL),
(4, 'Espejos', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2022_02_04_161932_create_sessions_table', 1),
(7, '2022_02_04_165000_create_categories_table', 1),
(8, '2022_02_04_165242_create_products_table', 1),
(9, '2022_02_04_170020_create_orders_table', 1),
(10, '2022_02_04_170426_create_orderlinestable', 1),
(11, '2022_02_09_152219_create_adressess_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orderlines`
--

DROP TABLE IF EXISTS `orderlines`;
CREATE TABLE `orderlines` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `precioAct` date NOT NULL,
  `desc` int(11) NOT NULL,
  `cant` int(11) NOT NULL,
  `products` int(11) NOT NULL,
  `orders` int(11) NOT NULL,
  `products_id` bigint(20) UNSIGNED NOT NULL,
  `orders_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `users` int(11) NOT NULL,
  `users_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(10,2) NOT NULL,
  `taxe` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numSell` int(11) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `category`, `style`, `price`, `taxe`, `discount`, `image`, `numSell`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Nook', 'Mueble de baño de estilo nórdico en 80, 100, 120 y 140 cm. Varios acabados disponibles.', 'Muebles', 'Nordico', 549.00, 21, 10, 'Nook', 5, 1, NULL, NULL),
(2, 'Bend', 'Mueble de baño de estilo boho en 60 y 80 cm. Acabado blanco brillo. Patas incluidas.', 'Muebles', 'Boho', 399.00, 21, 10, 'Bend', 0, 1, NULL, NULL),
(3, 'Olive', 'Mueble de baño de estilo industrial en 80, 100 y 120 cm. Acabado verde mate y blanco mate.', 'Muebles', 'Industrial', 719.00, 21, 10, 'Olive', 0, 1, NULL, NULL),
(4, 'Kol', 'Mueble de baño de estilo industrial en 60, 70, 80, 90 y 100 cm. Varios acabados disponibles.', 'Muebles', 'Industrial', 670.00, 21, 10, 'Kol', 0, 1, NULL, NULL),
(5, 'Belle', 'Mueble de baño de estilo glamour en 80 cm. Acabado blanco mate.', 'Muebles', 'Glamour', 419.00, 21, 10, 'Belle', 7, 1, NULL, NULL),
(6, 'Classy', 'Mueble de baño de estilo glamour en 60, 80 y 100 cm. Varios acabados disponibles.', 'Muebles', 'Glamour', 649.00, 21, 10, 'Classy', 0, 1, NULL, NULL),
(7, 'Baltic', 'Mueble de baño de estilo boho en 80, 90, 100 y 110 cm. Acabados en madera natural.', 'Muebles', 'Boho', 780.00, 21, 10, 'Baltic', 0, 1, NULL, NULL),
(8, 'Maya', 'Mueble de baño de estilo industrial en 100 cm. Varios acabados disponibles.', 'Muebles', 'Industrial', 510.00, 21, 10, 'Maya', 1, 1, NULL, NULL),
(9, 'Alaska', 'Mueble de baño de estilo nórdico en 80 y 100 cm. Acabado azul oscuro mate. Patas incluidas.', 'Muebles', 'Nordico', 639.00, 21, 10, 'Alaska', 0, 1, NULL, NULL),
(10, 'Bliss', 'Mueble de baño de estilo glamour en 80 cm. Acabado blanco mate y rosa pálido.', 'Muebles', 'Glamour', 809.00, 21, 10, 'Bliss', 0, 1, NULL, NULL),
(11, 'Vega', 'Mueble de baño de estilo boho en 60, 80, 100 y 120 cm. Varios acabados disponibles.', 'Muebles', 'Boho', 539.00, 21, 10, 'Vega', 0, 1, NULL, NULL),
(12, 'Narcisse', 'Mueble de baño de estilo industrial en 100, 120 y 140 cm. Acabado gris espejo y bronce espejo.', 'Muebles', 'Industrial', 949.00, 21, 10, 'Narcisse', 3, 1, NULL, NULL),
(13, 'Essential', 'Mueble de baño de estilo industrial en 60 y 80 cm. Acabado en blanco brillo.', 'Muebles', 'Industrial', 319.00, 21, 10, 'Essential', 0, 1, NULL, NULL),
(14, 'Frida', 'Mueble de baño de estilo glamour en 90, 100 y 110 cm. Acabado negro y dorado.', 'Muebles', 'Glamour', 779.00, 21, 10, 'Frida', 0, 1, NULL, NULL),
(15, 'Salvio', 'Mueble de baño de estilo nórdico en 60, 80, 100 y 120 cm. Varios acabados disponibles.', 'Muebles', 'Nordico', 509.00, 21, 10, 'Salvio', 0, 1, NULL, NULL),
(16, 'Flavia', 'Mueble de baño de estilo nórdico en 80 y 100 cm. Acabado blanco mate y maderas. Patas incluidas.', 'Muebles', 'Nordico', 559.00, 21, 10, 'Flavia', 0, 1, NULL, NULL),
(17, 'Ona', 'Mueble de baño de estilo glamour en 60, 80 y 100 cm. Varios acabados disponibles.', 'Muebles', 'Glamour', 609.00, 21, 10, 'Ona', 9, 1, NULL, NULL),
(18, 'Wabi', 'Mueble de baño de estilo boho en 80, 90, 100 y 110 cm. Acabados en madera natural.', 'Muebles', 'Boho', 709.00, 21, 10, 'Wabi', 4, 1, NULL, NULL),
(19, 'Mireia', 'Mueble de baño de estilo industrial en 100 y 120 cm. Varios acabados disponibles.', 'Muebles', 'Industrial', 510.00, 21, 10, 'Mireia', 0, 1, NULL, NULL),
(20, 'Aldo', 'Mueble de baño de estilo nórdico en 80 y 100 cm. Acabado gris ceniza.', 'Muebles', 'Nordico', 749.00, 21, 10, 'Aldo', 0, 1, NULL, NULL),
(22, 'Terra', 'Mueble de baño de estilo industrial en 80, 100 y 120 cm. Acabado naranja mate y blanco mate.', 'Muebles', 'Industrial', 589.00, 21, 10, 'Terra', 2, 1, NULL, NULL),
(23, 'Chloe', 'Mueble de baño de estilo industrial en 60, 70, 80, 90 y 100 cm. Varios acabados disponibles.', 'Muebles', 'Industrial', 970.00, 21, 10, 'Chloe', 0, 1, NULL, NULL),
(24, 'Balea', 'Mueble de baño de estilo glamour en 80 cm. Acabado blanco mate.', 'Muebles', 'Glamour', 619.00, 21, 10, 'Balea', 0, 1, NULL, NULL),
(25, ' Arco', 'Mueble de baño de estilo boho en 60, 80 y 100 cm. Varios acabados disponibles.', 'Muebles', 'Boho', 649.00, 21, 10, 'Arco', 2, 1, NULL, NULL),
(26, 'Nexo', 'Patas para mueble de baño de estilo nórdico.', 'Patas', 'Nordico', 45.00, 21, 5, 'Nexo', 6, 2, NULL, NULL),
(27, 'Bend', 'Patas para mueble de baño de estilo nórdico.', 'Patas', 'Nordico', 37.00, 21, 5, 'Bend', 0, 2, NULL, NULL),
(28, 'Alice', 'Patas para mueble de baño de estilo boho.', 'Patas', 'Boho', 25.00, 21, 5, 'Alice', 0, 2, NULL, NULL),
(29, 'Nature', 'Patas para mueble de baño de estilo boho.', 'Patas', 'Boho', 41.00, 21, 5, 'Nature', 0, 2, NULL, NULL),
(30, 'Lute', 'Patas para mueble de baño de estilo industrial.', 'Patas', 'Industrial', 33.00, 21, 5, 'Lute', 0, 2, NULL, NULL),
(31, 'Porto', 'Patas para mueble de baño de estilo industrial.', 'Patas', 'Industrial', 24.00, 21, 5, 'Porto', 0, 2, NULL, NULL),
(32, 'Caliu', 'Patas para mueble de baño de estilo glamour.', 'Patas', 'Glamour', 22.00, 21, 5, 'Caliu', 0, 2, NULL, NULL),
(33, 'Soleil', 'Patas para mueble de baño de estilo glamour.', 'Patas', 'Glamour', 37.00, 21, 5, 'Soleil', 0, 2, NULL, NULL),
(34, 'Bruno', 'Espejo para mueble de baño de estilo nórdico.', 'Espejos', 'Nordico', 45.00, 21, 5, 'Bruno', 0, 4, NULL, NULL),
(35, 'Telmo', 'Espejo para mueble de baño de estilo nórdico.', 'Espejos', 'Nordico', 37.00, 21, 5, 'Telmo', 0, 4, NULL, NULL),
(36, 'Ebro', 'Espejo para mueble de baño de estilo boho.', 'Espejos', 'Boho', 25.00, 21, 5, 'Ebro', 0, 4, NULL, NULL),
(37, 'Aleix', 'Espejo para mueble de baño de estilo boho.', 'Espejos', 'Boho', 41.00, 21, 5, 'Aleix', 0, 4, NULL, NULL),
(38, 'Lliso', 'Espejo para mueble de baño de estilo industrial.', 'Espejos', 'Industrial', 33.00, 21, 5, 'Lliso', 0, 4, NULL, NULL),
(39, 'Paok', 'Espejo para mueble de baño de estilo industrial.', 'Espejos', 'Industrial', 24.00, 21, 5, 'Paok', 0, 4, NULL, NULL),
(40, 'Huguet', 'Espejo para mueble de baño de estilo glamour.', 'Espejos', 'Glamour', 22.00, 21, 5, 'Huguet', 0, 4, NULL, NULL),
(41, 'Jofre', 'Espejo para mueble de baño de estilo glamour.', 'Espejos', 'Glamour', 37.00, 21, 5, 'Jofre', 0, 4, NULL, NULL),
(42, 'Lau', 'Accesorio para mueble de baño de estilo nórdico.', 'Accesorios', 'Nordico', 45.00, 21, 5, 'Lau', 0, 3, NULL, NULL),
(43, 'Dania', 'Accesorio para mueble de baño de estilo nórdico.', 'Accesorios', 'Nordico', 37.00, 21, 5, 'Dania', 0, 3, NULL, NULL),
(44, 'Anna', 'Accesorio para mueble de baño de estilo boho.', 'Accesorios', 'Boho', 25.00, 21, 5, 'Anna', 0, 3, NULL, NULL),
(45, 'Naima', 'Accesorio para mueble de baño de estilo nórdico.', 'Accesorios', 'Nordico', 45.00, 21, 5, 'Naima', 0, 3, NULL, NULL),
(48, 'Lena', 'Accesorio para mueble de baño de estilo nórdico.', 'Accesorios', 'Nordico', 37.00, 21, 5, 'Lena', 0, 3, NULL, NULL),
(49, 'May', 'Accesorio para mueble de baño de estilo boho.', 'Accesorios', 'Boho', 25.00, 21, 5, 'May', 0, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('AwbgryDULotzkdHlOdcn4avqvLmfquofyA8tFR1e', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiWkl5MHpyRFc3aEM3ZVlHRWxCQ2xPQWJCU2JNTUJJU3RIWGhuTm9TciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjk6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jYXJyaXRvIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozNDoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3VzZXIvcHJvZmlsZSI7fX0=', 1645125032);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dni` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `rol`, `dni`, `email`, `avatar`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'Jorge Román Calero', 'cliente', '73598631B', 'jromancalero@gmail.com', '', NULL, '11111111', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adressess`
--
ALTER TABLE `adressess`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adressess_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orderlines`
--
ALTER TABLE `orderlines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderlines_products_id_foreign` (`products_id`),
  ADD KEY `orderlines_orders_id_foreign` (`orders_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_users_id_foreign` (`users_id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adressess`
--
ALTER TABLE `adressess`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `orderlines`
--
ALTER TABLE `orderlines`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adressess`
--
ALTER TABLE `adressess`
  ADD CONSTRAINT `adressess_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `orderlines`
--
ALTER TABLE `orderlines`
  ADD CONSTRAINT `orderlines_orders_id_foreign` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `orderlines_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
