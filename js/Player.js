"use strict";

export class Player {
    name;
    score = 0;
    number = 0;
    killer = false;
    id = null;
    inPlay = true;

    constructor(name) {
        this.name = name;
    }

    reset() {
        this.score = 0;
        this.number = 0;
        this.killer = false;
        this.inPlay = true;
    }

    increaseScore(weight) {
        if (this.score < 5) {
            if (this.score + weight > 5) this.score = 5;
            else this.score += weight;
        }
        this.setKiller();
    }

    decreaseScore(weight) {
        if (this.score !== 0) {
            if (this.score - weight <= 0) {
                this.score = 0;
                this.inPlay = false;
            } else {
                this.score -= weight;
            }
        }

        this.setKiller();
    }

    setNumber(number) {
        this.number = number;
    }

    getNumber() {
        return this.number;
    }

    setKiller() {
        this.killer = (this.score >= 5);
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    getScore() {
        if (!this.inPlay) return "Dead";
        if (this.inPlay && this.score === 100) return "Winner";
        if (this.inPlay && this.score === 0) return "Immune";
        if (this.inPlay && this.score === 1) return "|";
        if (this.inPlay && this.score === 2) return "| |";
        if (this.inPlay && this.score === 3) return "| | |";
        if (this.inPlay && this.score === 4) return "| | | |";
        return (this.score < 5) ? this.score : "Killer";
    }
}