import validate from '../utilities/validate';

it('Validate null input and be (Error - Invalid inputs)', () => {
    expect(validate.isValid(null)).toEqual('Error - Invalid inputs');
});

it('Validate undefined input and be (Error - Invalid inputs)', () => {
    expect(validate.isValid(undefined)).toEqual('Error - Invalid inputs');
});
