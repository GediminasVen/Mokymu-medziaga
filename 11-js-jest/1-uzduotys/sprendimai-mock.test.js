const app = require('./sprendimai-mock')

describe('1 uzd', () => {
    it('ar funkcija buvo iskviesta', () => {
        const mock = jest.spyOn(app, 'pirmaFunkcija')
        app.antraFunkcija();
        expect(mock).toHaveBeenCalled();
    })
})

describe('2 ir 3 uzd', () => {
    it('ar funkcija buvo iskviesta su teisingais skaiciais', () => {
        const mock = jest.spyOn(app, 'skaiciaiKuriuosSudet')
        app.skaiciaiKuriuosSudet(3, 6);
        expect(mock).toHaveBeenCalledWith(3, 6);

        
    })
    it('ar funkcija buvo iskviesta su teisingais skaiciais', () => {
        const mock = jest.spyOn(app, 'skaiciaiKuriuosSudet')
        const result = app.skaiciaiKuriuosSudet(3, 6);
        expect(result).toBe(9);


    })
})