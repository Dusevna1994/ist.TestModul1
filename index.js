exports.Dani = [ "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota", "Nedelja"]; 

let Meseci = [ "Januar","Februar", "Mart", "April", "Maj", "Jun", 
"Jul", "Avgust", "Septembar","Oktobar", "Novembar", "Decembar"]; 

exports.Meseci = Meseci; 

exports.vikendDani = () => { return [this.Dani[5], this.Dani[6]]; }

function nadjiMesec(xi) {
     xi = xi-1;
     if(xi >= 0 && xi <= 11) 
        return Meseci[xi]; 
     else 
        return undefined; 
} 
exports.mesec = (i) => nadjiMesec(i); 

exports.dan = function nadjiDan(xi) { 
    if(xi >= 0 && xi <= 6) 
        return this.Dani[xi]; 
    else 
        return undefined; 
}

const knjiga = {
    autor: 'RSUM',
    delo: 'PESME'
    
}

exports.knjiga = knjiga;