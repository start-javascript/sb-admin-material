import { FormsModule } from './forms.module';

describe('FormsModule', () => {
    let formsModule: FormsModule;

    beforeEach(() => {
        formsModule = new FormsModule();
    });

    it('should create an instance', () => {
        expect(formsModule).toBeTruthy();
    });
});
