import { BlackPageModule } from './black-page.module';

describe('BlackPageModule', () => {
    let blackPageModule: BlackPageModule;

    beforeEach(() => {
        blackPageModule = new BlackPageModule();
    });

    it('should create an instance', () => {
        expect(blackPageModule).toBeTruthy();
    });
});
