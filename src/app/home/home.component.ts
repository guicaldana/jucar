import { Component, OnInit } from '@angular/core';

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
        {
            name: "Saint John",
        },
        {
            name: "Saint Paul",
        },
        {
            name: "Saint Peter",
        },
        {
            name: "Saint Andrew",
        },
        {
            name: "Saint James",
        },
        {
            name: "Saint Matthew",
        },
        {
            name: "Saint Mark",
        },
        {
            name: "Saint Luke",
        },
        {
            name: "Saint Jude",
        },
        {
            name: "Saint Simon",
        },
        {
            name: "Saint Bartholomew",
        },
        {
            name: "Saint Thomas",
        },
        {
            name: "Saint Philip",
        },
        {
            name: "Saint James the Less",
        },
        {
            name: "Saint Matthias",
        },
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
