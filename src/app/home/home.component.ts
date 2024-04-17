import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    public allSaints = [
        { name: "Beato Ciríaco Elias K. Chavara" },
        { name: "São Pedro Tomás" },
        { name: "Santo André Corsini" },
        { name: "São Enrique Ossó e Cervelló" },
        { name: "Beata Arcângela Girlani" },
        { name: "Beata Candelária de São José" },
        { name: "Beato Nuno Alvares" },
        { name: "Beato Battista Spagnoli" },
        { name: "Beata Maria da Encarnação" },
        { name: "Beata Teresa Maria da Cruz" },
        { name: "Santo Angelo da Sicília" },
        { name: "Beato Aluísio Rabatá" },
        { name: "Beato Jorge Preca" },
        { name: "São Simão Stock" },
        { name: "Sta. Joaquina Vedruna" },
        { name: "Sta. Maria Madalena de Pazzi" },
        { name: "Beata Ana de São Bartolomeu" },
        { name: "Beato Hilário Januszewski" },
        { name: "Beato Afonso Maria Mazurek" },
        { name: "Santo Eliseu" },
        { name: "Beata Maria Crocifissa Curcio" },
        { name: "Beata Joana Scopelli" },
        { name: "Beata Teresa de los Andes" },
        { name: "Beata Teresa de Santo Agostinho" },
        { name: "Santo Elias" },
        { name: "Beato João Soreth, presbítero" },
        { name: "Beata Mártire de Guadalajara: Maria Pilar" },
        { name: "Beata Mártire de Guadalajara: Teresa Maria dos Anjos" },
        { name: "Beata Mártire de Guadalajara: Maria das Mercês Prat" },
        { name: "São Tito Brandsma" },
        { name: "Santo Alberto Trápani" },
        { name: "Santa Teresa Benedita da Cruz (Edith Stein)" },
        { name: "Beato Isidoro Bakanja" },
        { name: "Beata Maria do Sacrário" },
        { name: "Beato Ângelo Agostinho Mazinghi" },
        { name: "Beata Míriam de Jesus Crucificado" },
        { name: "Santa Teresa Margarita Redi" },
        { name: "Beata Maria de Jesus López Rivas" },
        { name: "Santo Alberto de Jerusalém" },
        { name: "Sta. Teresinha do Menino Jesus" },
        { name: "Sta. Teresa d’Ávilla" },
        { name: "Beata Francisca de Ambrósia" },
        { name: "São Nuno de Santa Maria" },
        { name: "Beata Josefa Naval Girbes" },
        { name: "Beato Francisco Palau" },
        { name: "Beata Elisabete da Trindade" },
        { name: "Beata Maria Teresa de Jesus Scrilli" },
        { name: "São Rafael Kalinowski" },
        { name: "Beatos Dionísio da Natividade e Redento da Cruz" },
        { name: "Beato Bartolomeu Fanti" },
        { name: "Santa Maria das Maravilhas de Jesus" },
        { name: "São João da Cruz" },
        { name: "Beata Maria dos Anjos" }
    ];

    public sortedSaints = [];
    public nonSortedSaints = [];

    public sortedSaint: string;

    public visibleSortedSaint: boolean;
    public visibleSortSaintCard: boolean;

    focus;
    focus1;
    constructor() { }

    ngOnInit() {
        this.nonSortedSaints = this.allSaints;
        this.visibleSortedSaint = false;
        this.visibleSortSaintCard = false;
    }

    public sortSaint() {
        var index = Math.floor(Math.random() * this.allSaints.length);
        this.sortedSaint = this.nonSortedSaints[index].name;
        this.sortedSaints.push(this.allSaints[index]);
        this.nonSortedSaints.splice(index, 1);
        this.visibleSortedSaint = true;
        this.visibleSortSaintCard = true;
        
    }

}
