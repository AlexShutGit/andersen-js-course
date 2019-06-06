/* eslint-disable import/prefer-default-export */
/**
 * Реализовать функцию arrayDiff в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива.
 * Возвращает новый массив, который состоит только из тех элементов,
 * которые встрелились в одном массиве, но не встретились в другом
 *
 * ([1, 2, 3], [1, 2, 4])) -> 1ца и 2ка есть и там, и там - их выкидываем
 * 3ка есть только в 1ом массиве, 4ка только во 2ом. Возвращаем массив [3, 4]
 *
 * ([1, 3, 3, 4], [1, 3, '4'])) -> возвращаем [4, '4'],
 * так как одно значение - чисто, второе - строка.
 * Значения 1, 3 - есть и в 1ом и во 2ом массиве. Их выбрасываем.
 *
 * console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
 * console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']
 */
export const arrayDiff = (arr1, arr2) => {
  const resArr = [];
  const checkArr2 = element => {
    if (!arr2.includes(element)) resArr.push(element);
  };
  const checkArr1 = element => {
    if (!arr1.includes(element)) resArr.push(element);
  };
  arr1.some(checkArr2);
  arr2.some(checkArr1);
  return resArr;
  // var arr3 = [];
  // for (const i in arr1) {
  //   if (!arr2.includes(arr1[i])) {
  //     arr3.push(arr1[i]);
  //   }
  // }
  // for (const i in arr2) {
  //   if (!arr1.includes(arr2[i])) {
  //     arr3.push(arr2[i]);
  //   }
  // }
  // return arr3;
};
