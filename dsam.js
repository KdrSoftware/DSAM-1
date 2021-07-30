//DSAM KdR Backend
d_asel = 0
d_savel = 0
d_bagel = 0
m_asel = 0
m_savel = 0
m_bagel = 0
oto_save = false
data = window.localStorage
function dsam_version(){
	return("DSAM / Version : 0.7 / KdR Backend")
}
function asel(deger){
	if(d_asel > 750 && deger < 0){
		d_asel = d_asel + (deger/2)
	}else if(d_asel < -750 && deger > 0){
		d_asel = d_asel + (deger/2)
	}else if(d_asel > 750 && deger > 0){
		d_asel = d_asel + (2 * deger)
	}else if(d_asel < -750 && deger < 0){
		d_asel = d_asel + (2 * deger)
	}else {
		d_asel = d_asel + deger
	}
	if(oto_save == true){
		dsam_save()
	}
}
function savel(deger){
	if(d_savel > 750 && deger < 0){
		d_savel = d_savel + (deger/2)
	}else if(d_savel < -750 && deger > 0){
		d_savel = d_savel + (deger/2)
	}else if(d_savel > 750 && deger > 0){
		d_savel = d_savel + (2 * deger)
	}else if(d_savel < -750 && deger < 0){
		d_savel = d_savel + (2 * deger)
	}else {
		d_savel = d_savel + deger
	}
	if(oto_save == true){
		dsam_save()
	}
}
function bagel(deger){
	if(d_bagel > 750 && deger < 0){
		d_bagel = d_bagel + (deger/2)
	}else if(d_bagel < -750 && deger > 0){
		d_bagel = d_bagel + (deger/2)
	}else if(d_bagel > 750 && deger > 0){
		d_bagel = d_bagel + (2 * deger)
	}else if(d_bagel < -750 && deger < 0){
		d_bagel = d_bagel + (2 * deger)
	}else {
		d_bagel = d_bagel + deger
	}
	if(oto_save == true){
		dsam_save()
	}
}
function mood(){
	m_asel = Math.abs(d_asel)
	m_savel = Math.abs(d_savel)
	m_bagel = Math.abs(d_bagel)
	if(m_asel > m_bagel && m_asel > m_savel){
		if (d_asel > 0) {
			return("B")
		}else if(d_asel < 0){
			return("A")
		}
	}else if(m_savel > m_asel && m_savel > m_bagel){
		if (d_savel > 0) {
			return("D")
		}else if(d_savel < 0){
			return("C")
		}
	}else if(m_bagel > m_savel && m_bagel > m_asel){
		if (d_bagel > 0) {
			return("F")
		}else if(d_bagel < 0){
			return("E")
		}
	}else{
		return("N")
	}
}
function dsam_check(nameofcheck){
	if(nameofcheck == "asel"){
		return(d_asel)
	}else if(nameofcheck == "savel"){
		return(d_savel)
	}else if(nameofcheck == "bagel"){
		return(d_bagel)
	}
}
function dsam_calm(miktar){ 
	if(d_asel != 0){
		d_asel = d_asel - (d_asel/miktar)
	}
	if(d_savel != 0){
		d_savel = d_savel - (d_savel/miktar)
	}
	if(d_bagel != 0){
		d_bagel = d_bagel - (d_bagel/miktar)
	}
	if(oto_save == true){
		dsam_save()
	}
	sayac = sayac + 1
}//Döngüye dıkmak , süreye tabii tutmak gibi şeyler geliştiriciye bırakılmıştır.
function cer(){
	if(d_asel < 0 && d_savel > 0 && d_bagel < 0){
		return("A")
	}else if(d_asel > 0 && d_savel > -300 && d_savel < 300 && d_bagel > 0){
		return("B")
	}else if(d_asel < 0 && d_savel < 0 && d_bagel < 0){
		return("C")
	}else{
		return("N")
	}
}
function dsam_save(){
	data.setItem("asel",d_asel)
	data.setItem("savel",d_savel)
	data.setItem("bagel",d_bagel)
}
function dsam_load(){
	d_asel = parseInt(data.getItem("asel"))
	d_savel = parseInt(data.getItem("savel"))
	d_bagel = parseInt(data.getItem("bagel"))
}
function dsam_clear(secim){
	if(secim == 0){
		data.setItem("asel",0)
		data.setItem("savel",0)
		data.setItem("bagel",0)
	}
}
function dsam_stress(){
	asel_stres = d_asel *-1
	savel_stres = d_savel 
	bagel_stres = d_bagel * -1
	genel_stres = (asel_stres + savel_stres + bagel_stres)/3
	return(parseInt(genel_stres));
}
function wore(){
	if(d_savel > 0){
		return("E")
	}else if(d_savel < 0){
		return("W")
	}else{
		return("N")
	}
}
function ides(){
	sabit_büyük = ""
	sabit_deger = 0
	m_asel = Math.abs(d_asel)
	m_savel = Math.abs(d_savel)
	m_bagel = Math.abs(d_bagel)
	if(m_asel > m_bagel && m_asel > m_savel){
		if (d_asel > 0) {
			sabit_büyük = "B"
			sabit_deger = m_asel
		}else if(d_asel < 0){
			sabit_büyük = "A"
			sabit_deger = m_asel
		}
	}else if(m_savel > m_asel && m_savel > m_bagel){
		if (d_savel > 0) {
			sabit_büyük = "D"
			sabit_deger = m_savel
		}else if(d_savel < 0){
			sabit_büyük = "C"
			sabit_deger = m_savel
		}
	}else if(m_bagel > m_savel && m_bagel > m_asel){
		if (d_bagel > 0) {
			sabit_büyük = "F"
			sabit_deger = m_bagel
		}else if(d_bagel < 0){
			sabit_büyük = "E"
			sabit_deger = m_bagel
		}
	}else{
		sabit_büyük = "N"
		sabit_deger = 0
	}

	if(sabit_deger < 450){
		return("E")
	}else if(sabit_büyük == "A" || sabit_büyük == "D" || sabit_büyük == "E"){
		return("SE")
	}else if(sabit_büyük == "B" || sabit_büyük == "C" || sabit_büyük == "F"){
		return("ID")
	}
}
function dsam_data_boot(oto,load){
	if(oto == true){
		oto_save = true
	}
	//ÇOK ÖNEMLİ NOT : Boot yapılabilmesi için sisteme komuttan önce 1 kere veri kaydı girilerek NaN sorunu çözülmelidir.
	//Örneğin dsam_save yapılması bootdan önce.
	if(load == true){
		dsam_load()
	}
}
function dsam_calm_boot(sayi,zaman){
	var time;
	time = window.setInterval("dsam_calm("+String(sayi)+")",zaman)
}
function dsam_look(){
	look_mood = mood()
	look_cer = cer()
	look_stres = dsam_stress()
	look_wore = wore()
	look_ides = ides()
	return(String(d_asel) + " | " + String(d_savel) + " | " + String(d_bagel) + " | " + look_mood +" | "+ look_cer+ " | " + look_stres + " | " + look_wore + " | "+ look_ides)
}
