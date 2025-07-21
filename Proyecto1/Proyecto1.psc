Algoritmo Proyecto1
	Definir i, precioItem, cantItem, dscto, totalDsctos, subTotal, totalIva, total Como Entero
	Definir nombre, direccion, ciudad, respuestaCupon, cupoName, CUPON como cadena
	Definir IVA, dsctoCupon, cant1, cant2, cant3, dsctoCant, totalItems Como Real
	
	IVA <- 0.19	
	CUPON <- "descuento10"
	cant1 <- 0.03 // 3 a 5 unidades
	cant2 <- 0.05 // 6 a 9 unidades
	cant3 <- 0.10 // 10 o mas unidades
	
	Escribir "Bienvenido a NachoStore, cual es tu Nombre?"
	Leer nombre
	Escribir nombre," cuantos items llevas hoy?"
	Leer cantItem
	
	Dimension precioItem[cantItem]
	
	// Ingresar valor de los item/items
	Si cantItem > 0 Entonces
		Para i<-1 Hasta cantItem Con Paso 1 Hacer
			Escribir "Cual es el valor del item ", i, ": "
			Leer precioItem[i]
			totalItem <- totalItem + precioItem[i]
		Fin Para
	SiNo
		Escribir "No llevas ningun item, gracias por visitarnos"
	FinSi
	
	// Suma el total de los valores de los productos
	
	
	Escribir nombre, " tienes un cupon de descuento (S/N)?"
	Leer respuestaCupon
	
	// Validacion cupon
	Si (Minusculas(respuestaCupon) = "s") o (Minusculas(respuestaCupon) = "si") Entonces
		Escribir "Ingresa el Codigo del Cupon"
		Leer cupoName
		Si Minusculas(cupoName) = Minusculas(CUPON) Entonces
			Escribir "Cupon Valido, obtuviste un 10% de descuento en esta compra"
			dsctoCupon <- 0.10
		SiNo
			Escribir "Cupon no valido"
			dsctoCupon <- 0
		FinSi
	SiNo
		Escribir "Solicita un cupon en para tu proxima compra"
	FinSi
	
	// total con descuento del cupon
	
	// aplicar impuesto
	
	// Descuento por cantidad
	Si cantItem <= 2 Entonces
		dsctoCant <- 0
	sino 
		Si cantItem < 6 Entonces
			dsctoCant <- cant1
		SiNo
			si cantItem < 10 Entonces
				dsctoCant <- cant2
			SiNo
				dsctoCant <- cant3
			FinSi
		FinSi
	FinSi
	
	Escribir "el total es $", totalItem
	
FinAlgoritmo
