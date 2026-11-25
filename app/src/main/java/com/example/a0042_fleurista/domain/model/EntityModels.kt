package com.example.a0042_fleurista.domain.model

data class User(
    val id: Int,
    val name: String,
    val email: String,
    val phone: String,
    val role: String
)

data class Category(
    val id: Int,
    val name: String,
    val description: String
)

data class Product(
    val id: Int,
    val categoryId: Int,
    val categoryName: String = "",
    val name: String,
    val description: String,
    val price: Double,
    val stock: Int,
    val imageUrl: String? = null
)

data class DeliveryAddress(
    val id: Int,
    val userId: Int,
    val label: String,
    val recipientName: String,
    val recipientPhone: String,
    val fullAddress: String
)

data class PreOrderTransaction(
    val id: Int,
    val orderCode: String,
    val userId: Int,
    val customerName: String = "",
    val productId: Int,
    val productName: String = "",
    val addressId: Int,
    val fullAddress: String = "",
    val quantity: Int,
    val deliveryDate: String,
    val greetingCardText: String,
    val totalPrice: Double,
    val status: String
)

data class ProductReview(
    val id: Int,
    val userId: Int,
    val userName: String = "",
    val productId: Int,
    val productName: String = "",
    val rating: Int,
    val comment: String
)
