import { CreateSetModule } from './create-set.module';

describe('FormsModule', () => {
    let createSetModuleModule: CreateSetModule;

    beforeEach(() => {
        createSetModuleModule = new CreateSetModule();
    });

    it('should create an instance', () => {
        expect(createSetModuleModule).toBeTruthy();
    });
});
