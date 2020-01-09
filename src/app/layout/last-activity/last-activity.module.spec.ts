import { LastActivityModule } from './last-activity.module';

describe('TablesModule', () => {
    let lastActivityModule: LastActivityModule;

    beforeEach(() => {
        lastActivityModule = new LastActivityModule();
    });

    it('should create an instance', () => {
        expect(lastActivityModule).toBeTruthy();
    });
});
