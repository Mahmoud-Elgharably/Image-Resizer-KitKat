import imgProcessing from '../utilities/imgProcessing';

it('Processing image resizing function and it should be true', () => {
    expect(async () => {
        await imgProcessing.resizeImage('santamonica', 200, 70, '200santamonica70');
    }).toBeTrue;
});

//it('Processing read image function and it should not be throw', () => {
//    expect(async () => {
//        await imgProcessing.readImage(, '200santamonica70');
//    }).not.toThrow();
//});
