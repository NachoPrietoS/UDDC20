Algoritmo Proyecto1
	Definir i, precioItem, cantItem, opcDesp Como Entero
	Definir nombre, direccion, ciudad, respuestaCupon, cupoName, CUPON como cadena
	Definir IVA, Impuesto, montoCupon, montoDsctoCant, dscto, dsctoCupon, totalDsctos, subTotal, totalIva, subTotalConCant Como Real
	Definir total, cant1, cant2, cant3, dsctoCant, totalItem, subTotalConCupon, subTotalConIva, envio Como Real
	
	IVA <- 0.19	
	CUPON <- "cupon10"
	cant1 <- 0.03 // 3 a 5 unidades
	cant2 <- 0.05 // 6 a 9 unidades
	cant3 <- 0.10 // 10 o mas unidades
	costoEnvio <- 100
	
	Escribir "Bienvenido a NachoStore, cual es tu Nombre?"
	Leer nombre
	Escribir "Estimado/a ", nombre," cuantos items llevas hoy?"
	Leer cantItem
	
	Dimension precioItem[cantItem]
	
	// Ingresar valor de item/items y suma el total
	Si cantItem > 0 Entonces
		Para i<-1 Hasta cantItem Con Paso 1 Hacer
			Escribir "Cual es el valor del item ", i, ": "
			Leer precioItem[i]
			totalItem <- totalItem + precioItem[i]
		Fin Para

		// Validacion cupon
		Escribir nombre, " tienes un cupon de descuento (S/N)?"
		Leer respuestaCupon
	
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
	
		// calculo de subtotal con descuento del cupon
		subTotalConCupon <- totalItem - (totalItem * dsctoCupon)
		montoCupon <- totalItem - subTotalConCupon
	
		// calculo de impuesto al subtotal con descuento del cupon
		subTotalConIva <- subTotalConCupon + (subTotalConCupon * IVA)
		Impuesto <- subTotalConIva - subTotalConCupon
	
		// validacion de Descuento por cantidad
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
	
		// Calculo de subtotal con IVA con descuento por cantidad
		subTotalConCant <- subTotalConIva - ( subTotalConIva * dsctoCant )
		montoDsctoCant <- subTotalConIva - subTotalConCant
	
		// seleccion de envio
		Escribir "Selecciona 1 si es despacho nacional o 2 si es internacional"
		Leer opcDesp
	
		Si opcDesp = 1 Entonces
			Escribir "Ingresa tu direccion"
			Leer direccion
			envio <- costoEnvio
		sino
			Escribir "Ingresa tu ciudad"
			Leer ciudad
			Escribir "Ingresa direccion"
			leer direccion
			envio <- costoEnvio + (cantItem * 20)
		FinSi
	
		// detalle de boleta
		Escribir "-------Boleta NachoStore------"
		Escribir "-----------Productos---------"
		Para i<-1 Hasta cantItem Con Paso 1 Hacer
			Escribir "Item ", i," valor: ", precioItem[i]
		Fin Para
		Escribir "-----------------------------"
		Escribir "Subtotal: ", totalItem
		Escribir "Descuento cupon: ", montoCupon
		Escribir "Impuesto: ", Impuesto
		Escribir "Descuento por cantidad :", montoDsctoCant
		Escribir "Despacho :", envio
		Escribir "TOTAL A PAGAR :", (totalItem - montoCupon + Impuesto - montoDsctoCant + envio)
		Escribir "----------------------------"
		Si opcDesp = 1 Entonces
			Escribir "Envio sera despachado a: ", direccion
		sino
			Escribir "Envio sera despachado a la Ciudad: ", ciudad, " calle: ", direccion
		FinSi
		Escribir "Gracias ", nombre, " por preferirnos, esperamos verte pronto"
	
	SiNo
	Escribir "No llevas ningun item, gracias por visitarnos"
	FinSi
FinAlgoritmo
