USE [ShoppingEntities]
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([IdCategory], [Title], [IsDelete], [SubCategory], [TitleEN]) VALUES (1, N'Quần Áo', 0, N'Quần Áo', N'QuanAo')
INSERT [dbo].[Categories] ([IdCategory], [Title], [IsDelete], [SubCategory], [TitleEN]) VALUES (2, N'Giày Dép', 0, N'Giày Dép', N'GiayDep')
INSERT [dbo].[Categories] ([IdCategory], [Title], [IsDelete], [SubCategory], [TitleEN]) VALUES (3, N'Túi Ví', 0, N'Túi Ví', N'TuiVi')
INSERT [dbo].[Categories] ([IdCategory], [Title], [IsDelete], [SubCategory], [TitleEN]) VALUES (4, N'Mũ Nón', 0, N'Mũ Nón', N'MuNon')
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'f9a7fca0-09ec-4a20-2751-08dc06e63113', N'MLB - Áo thun unisex cổ tròn tay ngắn trẻ trung', CAST(1450000.00 AS Decimal(18, 2)), CAST(1450000.00 AS Decimal(18, 2)), N'Chất liệu: 100% Polyester. Kiểu dáng túi đeo chéo phom chữ nhật thời trang. Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB. Logo bóng chày thêu nổi bật phía trước. Họa tiết monogram cá tính. Dây đeo vải có thể thay đổi độ dài linh hoạt. Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện. Kích thước: W23 x H15 x D7 (cm). Xuất xứ thương hiệu: Hàn Quốc.', 0, 0, 0, 0, 1, 100, 10)
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'f9a7fca0-09ec-4a20-2752-08dc06e63113', N'MLB - Áo thun unisex cổ tròn tay ngắn Classic Monogram Front Pattern', CAST(2090000.00 AS Decimal(18, 2)), CAST(2090000.00 AS Decimal(18, 2)), N' 
Thương hiệu: MLB. Xuất xứ: Hàn Quốc. Giới tính: Unisex. Kiểu dáng: Áo thun. Màu sắc: Royal BLue, Cream. Chất liệu: 100% cotton. Cổ tròn, tay ngắn. Hoạ tiết: Trơn một màu. Logo: Chi tiết logo bóng chày in nổi bật ở gấu tay phải. Phom áo: Rộng, thoải mái. Thích hợp mặc trong các dịp: Đi chơi, đi làm. Xu hướng theo mùa: Sử dụng được tất cả các mùa trong năm.', 0, 0, 0, 0, 1, 100, 10)
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'f9a7fca0-09ec-4a20-2753-08dc06e63113', N'MLB - Túi đeo chéo phom chữ nhật Monogram', CAST(1990000.00 AS Decimal(18, 2)), CAST(1990000.00 AS Decimal(18, 2)), N'Chất liệu: 100% Polyester. Kiểu dáng túi đeo chéo phom chữ nhật thời trang. Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB. Logo bóng chày thêu nổi bật phía trước. Họa tiết monogram cá tính. Dây đeo vải có thể thay đổi độ dài linh hoạt. Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện. Kích thước: W23 x H15 x D7 (cm). Xuất xứ thương hiệu: Hàn Quốc.', 0, 0, 0, 0, 3, 100, 10)
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'816ec469-db01-4551-a00d-1b3d9bf22912', N'MLB - Giày sneakers unisex cổ thấp Bigball Chunky Mesh', CAST(2590000.00 AS Decimal(18, 2)), CAST(2590000.00 AS Decimal(18, 2)), N'Chất liệu: Da cao cấp, vải lưới
Kiểu dáng giày sneaker đế cao thời trang
Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB
Cộng hưởng cùng chi tiết chữ logo bóng chày sắc nét
Kết hợp đan xen giữa chất liệu da cao cấp với lớp lưới upper thoáng khí
Lớp lót êm ái, nâng dáng bước chân
Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện
Xuất xứ thương hiệu: Hàn quốc', 0, 0, 0, 0, 2, 100, 10)
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'e1915cc1-13a6-453f-911b-24e2408a0827', N'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky A', CAST(2490000.00 AS Decimal(18, 2)), CAST(2490000.00 AS Decimal(18, 2)), N'Chất liệu: Synthetic Leather Window EVE/Synthetic Rubber
Kiểu dáng giày sneakers đế cao thời trang
Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB
Cộng hưởng cùng chi tiết logo bóng chày in sắc nét
Lớp lót êm ái, nâng dáng bước chân
Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện
Xuất xứ thương hiệu: Hàn quốc', 0, 0, 0, 0, 2, 100, 10)
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'6bec391e-68a8-484a-abd3-57eef70f49e8', N'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky P Mega', CAST(2790000.00 AS Decimal(18, 2)), CAST(2790000.00 AS Decimal(18, 2)), N'Chất liệu: Synthetic Leather Window EVE/Synthetic Rubber
Kiểu dáng giày sneakers đế cao thời trang
Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB
Cộng hưởng cùng chi tiết logo bóng chày in sắc nét
Lớp lót êm ái, nâng dáng bước chân
Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện
Xuất xứ thương hiệu: Hàn quốc', 0, 0, 0, 0, 2, 100, 10)
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'598ffe13-ad73-444b-a7bc-a7e61c17d03a', N'MLB - Túi đeo chéo unisex phom chữ nhật Monogram Jacquard', CAST(2990000.00 AS Decimal(18, 2)), CAST(2990000.00 AS Decimal(18, 2)), N'Chất liệu: 100% Polyester. Kiểu dáng túi đeo chéo phom chữ nhật thời trang. Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB. Logo bóng chày thêu nổi bật phía trước. Họa tiết monogram cá tính. Dây đeo vải có thể thay đổi độ dài linh hoạt. Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện. Kích thước: W23 x H15 x D7 (cm). Xuất xứ thương hiệu: Hàn Quốc.', 0, 0, 0, 0, 3, 100, 10)
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'598ffe13-ad73-444b-a7cb-a7e61c17d03a', N'MLB - Áo thun unisex cổ tròn tay ngắn Classic Monogram', CAST(1990000.00 AS Decimal(18, 2)), CAST(1990000.00 AS Decimal(18, 2)), N' 
Thương hiệu: MLB. Xuất xứ: Hàn Quốc. Giới tính: Unisex. Kiểu dáng: Áo thun. Màu sắc: Royal BLue, Cream. Chất liệu: 100% cotton. Cổ tròn, tay ngắn. Hoạ tiết: Trơn một màu. Logo: Chi tiết logo bóng chày in nổi bật ở gấu tay phải. Phom áo: Rộng, thoải mái. Thích hợp mặc trong các dịp: Đi chơi, đi làm. Xu hướng theo mùa: Sử dụng được tất cả các mùa trong năm.', 0, 0, 0, 0, 1, 300, 5)
INSERT [dbo].[Products] ([IdProduct], [Title], [Price], [PriceSale], [Description], [IsBestseller], [IsNewArrival], [IsSale], [IsDelete], [CategoryId], [Quantity], [Discount]) VALUES (N'598ffe13-ad73-444b-a7cc-a7e61c17d03a', N'MLB - Túi đeo chéo phom chữ nhật Monogram', CAST(2990000.00 AS Decimal(18, 2)), CAST(2990000.00 AS Decimal(18, 2)), N'Chất liệu: 100% Polyester. Kiểu dáng túi đeo chéo phom chữ nhật thời trang. Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB. Logo bóng chày thêu nổi bật phía trước. Họa tiết monogram cá tính. Dây đeo vải có thể thay đổi độ dài linh hoạt. Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện. Kích thước: W23 x H15 x D7 (cm). Xuất xứ thương hiệu: Hàn Quốc.', 0, 0, 0, 0, 3, 100, 5)
GO
INSERT [dbo].[Customers] ([IdCustomer], [NameCustomer], [Email], [PassWord], [Phone], [Address], [Image], [BirthDay], [CreateDate], [IsDelete]) VALUES (N'f79cb230-3df6-4648-b69b-c7c97f53301a', N'Hòa', N'123@123', N'123456', N'1', N'26 Đinh Bộ Lĩnh', N'1', CAST(N'2022-11-11T00:00:00.0000000' AS DateTime2), CAST(N'2022-11-11T00:00:00.0000000' AS DateTime2), 0)
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (3, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-09T20:13:13.8404656' AS DateTime2), 4, N'2afb58b2-7730-46cb-2873-08dc1114a286', 0)
INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (4, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-09T20:15:24.0850938' AS DateTime2), 5, N'daf99bc0-7342-4b33-2874-08dc1114a286', 0)
INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (5, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-09T20:16:41.7600275' AS DateTime2), 6, N'6992d45d-4f86-4571-2875-08dc1114a286', 0)
INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (6, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-09T20:30:49.7432082' AS DateTime2), 7, N'1aa4eb40-f47f-4ab5-2876-08dc1114a286', 0)
INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (7, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-09T20:31:31.2698258' AS DateTime2), 8, N'e59511fb-4777-4b17-2877-08dc1114a286', 0)
INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (8, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-09T23:14:25.4448631' AS DateTime2), 9, N'9ebc9601-44ba-4190-2878-08dc1114a286', 0)
INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (9, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-10T20:45:30.7849174' AS DateTime2), 10, N'21fe9b7b-2950-4b20-bb82-08dc11e2647d', 0)
INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (10, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-10T20:46:44.2853341' AS DateTime2), 11, N'7a69fef4-f386-4d0c-bb83-08dc11e2647d', 0)
INSERT [dbo].[Orders] ([IdOrder], [CustomerId], [Total], [CreateAt], [IdPayment], [CartId], [IsDelete]) VALUES (11, N'f79cb230-3df6-4648-b69b-c7c97f53301a', CAST(0.00 AS Decimal(18, 2)), CAST(N'2024-01-10T21:20:17.9987268' AS DateTime2), 12, N'fc776f09-5460-49cb-bb84-08dc11e2647d', 0)
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([IdRole], [NameRole], [Description], [IsDelete], [Status]) VALUES (1, N'Admin', NULL, 0, 0)
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
INSERT [dbo].[Employees] ([IdEmployee], [NameEmployee], [Email], [Password], [Phone], [Image], [Address], [CreateDate], [Status], [IsDelete], [RoleId], [Otp]) VALUES (N'f79cb230-3df6-4648-b69b-c7c97f53301a', N'Hòa', N'123@123', N'123', N'1', N'1', N'1', CAST(N'2022-11-22T00:00:00.0000000' AS DateTime2), 0, 0, 1, N'0')
GO
INSERT [dbo].[ProductImages] ([IdProductImage], [ProductId], [imageUrl], [IsDelete]) VALUES (N'8f8ebadd-0304-4159-0035-08dc06e6423c', N'f9a7fca0-09ec-4a20-2751-08dc06e63113', N'http://res.cloudinary.com/ddv2idi9d/image/upload/v1703686518/Uploads/Product/00000000-0000-0000-0000-000000000000/20231227/1_20231227211515_zuoevu.webp', 0)
INSERT [dbo].[ProductImages] ([IdProductImage], [ProductId], [imageUrl], [IsDelete]) VALUES (N'0dd0f990-2589-4812-0036-08dc06e6423c', N'f9a7fca0-09ec-4a20-2751-08dc06e63113', N'http://res.cloudinary.com/ddv2idi9d/image/upload/v1703686520/Uploads/Product/00000000-0000-0000-0000-000000000000/20231227/1_20231227211520_pau40d.jpg', 0)
INSERT [dbo].[ProductImages] ([IdProductImage], [ProductId], [imageUrl], [IsDelete]) VALUES (N'53a9909b-3ff9-47ae-0037-08dc06e6423c', N'f9a7fca0-09ec-4a20-2751-08dc06e63113', N'http://res.cloudinary.com/ddv2idi9d/image/upload/v1703686525/Uploads/Product/00000000-0000-0000-0000-000000000000/20231227/1_20231227211521_laj1na.jpg', 0)
INSERT [dbo].[ProductImages] ([IdProductImage], [ProductId], [imageUrl], [IsDelete]) VALUES (N'0b326938-28ad-4492-0038-08dc06e6423c', N'f9a7fca0-09ec-4a20-2751-08dc06e63113', N'http://res.cloudinary.com/ddv2idi9d/image/upload/v1703686528/Uploads/Product/00000000-0000-0000-0000-000000000000/20231227/1_20231227211527_nldesn.jpg', 0)
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231227134623_jkl', N'6.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231228133614_bj', N'6.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231230135701_db', N'6.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231230144848_db1', N'6.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240107132902_db', N'6.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240107133855_dbk', N'6.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240107172404_dbka', N'6.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240109140020_k', N'6.0.0')
GO
INSERT [dbo].[CartItems] ([CartItemId], [IdCart], [ProductId]) VALUES (N'2c127d03-e7ff-4aed-4abc-08dc11e2649e', N'7a69fef4-f386-4d0c-bb83-08dc11e2647d', N'f9a7fca0-09ec-4a20-2751-08dc06e63113')
INSERT [dbo].[CartItems] ([CartItemId], [IdCart], [ProductId]) VALUES (N'112bbf1d-ae7c-42b5-4abd-08dc11e2649e', N'7a69fef4-f386-4d0c-bb83-08dc11e2647d', N'f9a7fca0-09ec-4a20-2752-08dc06e63113')
INSERT [dbo].[CartItems] ([CartItemId], [IdCart], [ProductId]) VALUES (N'fa89242c-ae05-4329-4abe-08dc11e2649e', N'fc776f09-5460-49cb-bb84-08dc11e2647d', N'f9a7fca0-09ec-4a20-2751-08dc06e63113')
INSERT [dbo].[CartItems] ([CartItemId], [IdCart], [ProductId]) VALUES (N'c02005aa-920e-480d-4abf-08dc11e2649e', N'fc776f09-5460-49cb-bb84-08dc11e2647d', N'f9a7fca0-09ec-4a20-2751-08dc06e63113')
GO
INSERT [dbo].[Carts] ([IdCart], [OrderedOn], [CustomerId], [Ordered], [IsDelete]) VALUES (N'7a69fef4-f386-4d0c-bb83-08dc11e2647d', CAST(N'2024-01-10T20:46:44.2879267' AS DateTime2), N'f79cb230-3df6-4648-b69b-c7c97f53301a', 1, 0)
INSERT [dbo].[Carts] ([IdCart], [OrderedOn], [CustomerId], [Ordered], [IsDelete]) VALUES (N'fc776f09-5460-49cb-bb84-08dc11e2647d', CAST(N'2024-01-10T21:20:18.0016264' AS DateTime2), N'f79cb230-3df6-4648-b69b-c7c97f53301a', 1, 0)
GO
SET IDENTITY_INSERT [dbo].[PaymentMethods] ON 

INSERT [dbo].[PaymentMethods] ([IdPaymentMethod], [Type], [Provider], [Available], [Reason]) VALUES (1, N'Cash', N'Tiền mặt', 1, N'0')
SET IDENTITY_INSERT [dbo].[PaymentMethods] OFF
GO
SET IDENTITY_INSERT [dbo].[Payments] ON 

INSERT [dbo].[Payments] ([Id], [CustomerId], [PaymentMethodId], [TotalAmount], [ShippingCharges], [AmoutReduced], [AmountPaid], [CreateAt], [Status]) VALUES (11, N'f79cb230-3df6-4648-b69b-c7c97f53301a', 1, 3540000, 20000, 354000, 3186000, CAST(N'2024-01-10T20:46:44.2614492' AS DateTime2), 0)
INSERT [dbo].[Payments] ([Id], [CustomerId], [PaymentMethodId], [TotalAmount], [ShippingCharges], [AmoutReduced], [AmountPaid], [CreateAt], [Status]) VALUES (12, N'f79cb230-3df6-4648-b69b-c7c97f53301a', 1, 2900000, 20000, 290000, 2610000, CAST(N'2024-01-10T21:20:17.9749898' AS DateTime2), 0)
SET IDENTITY_INSERT [dbo].[Payments] OFF
GO
