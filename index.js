const pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    get circumference() {
        return pi * this.diameter;
    }

    get area() {
        return pi * (this.radius ** 2);
    }

    set diameter(d) {
        this.radius = d / 2;
    }

    set circumference(c) {
        this.radius = (c / pi) / 2;
    }

    set area(a) {
        this.radius = Math.sqrt(a / pi);
    }
}

