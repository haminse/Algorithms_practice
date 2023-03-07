# def flippingMatrix(matrix):
#     _len= len(matrix)//2
    # print(_len)
    # # Write your code here
    # upper_matrix = matrix[0:_len][0:_len]

    # def sum_matrix(mat):
    #     sum = 0
    #     for row in matrix:
    #         for value in row:
    #             sum += value
    #     return sum
    
    # max_sum = sum_matrix(upper_matrix)
    # print(max_sum)
    # for i in range(len(matrix)):
    #     flip_row = matrix[i][::-1]
    #     matrix[i] = flip_row
    #     # print(matrix)
    #     for j in range(len(matrix)):
    #         flip_col = matrix[::-1][j]
            

#     return max_sum
# matrix = [[112, 42, 83, 119], 
#           [56, 125, 56, 49],
#           [15, 78, 101, 43], 
#           [62, 98, 114, 108]]

import numpy as np
def flippingMatrix(matrix):
    # sub mat val function
    def sub_mat_val(mat, _len):
        sub_mat = mat[0:_len, 0:_len]
        print(sub_mat)
        return np.sum(sub_mat)
    
    _len= len(matrix)//2
    mat = np.array(matrix)
    max_val = sub_mat_val(mat, _len)
    # print(max_val)
    for i in range(len(mat)):
        mat[i] = np.flip(mat[i])
        # print(mat)
        max_val = max(max_val, sub_mat_val(mat, _len))
        for j in range(len(mat)):
            mat[:,j] = np.flip(mat[:,j])
            # print(mat)
            max_val = max(max_val, sub_mat_val(mat, _len))
    return mat[0:_len, 0:_len], max_val


def flippingMatrix(matrix):
# sub mat val function
    def sub_mat_val(mat):
        _len = len(mat)//2
        sub_mat = mat[:_len, :_len]
        return np.sum(sub_mat)

    mat = np.array(matrix)
    max_val = sub_mat_val(mat)
    for i in range(len(mat)//2):
        for j in range(len(mat)//2):
            sub_mat = mat[i:i+len(mat)//2, j:j+len(mat)//2]
            orig_sum = sub_mat_val(sub_mat)
            max_val = max(max_val, orig_sum)
            for axis in [0, 1]:
                flipped_mat = np.flip(sub_mat, axis=axis)
                flipped_sum = sub_mat_val(flipped_mat)
                max_val = max(max_val, flipped_sum)
    return max_val

matrix = [[112, 42, 83, 119], 
          [56, 125, 56, 49],
          [15, 78, 101, 43], 
          [62, 98, 114, 108]]

def flippingMatrix(matrix):
# sub mat val function
    def sub_mat_val(mat):
        _len = len(mat)//2
        sub_mat = mat[:_len, :_len]
        return np.sum(sub_mat)

    mat = np.array(matrix)
    max_val = float('-inf')
    for i in range(len(mat)//2):
        for j in range(len(mat)//2):
            sub_mat = mat[i:i+len(mat)//2, j:j+len(mat)//2]
            sub_mat_val_list = [sub_mat_val(sub_mat)]
            for axis1 in [0, 1]:
                flipped_mat1 = np.flip(sub_mat, axis=axis1)
                sub_mat_val_list.append(sub_mat_val(flipped_mat1))
                for axis2 in [0, 1]:
                    flipped_mat2 = np.flip(flipped_mat1, axis=axis2)
                    sub_mat_val_list.append(sub_mat_val(flipped_mat2))
            max_val = max(max_val, max(sub_mat_val_list))
    return max_val

matrix = [[119, 114, 42, 111], 
          [56, 125, 101, 49],
          [15, 78, 56, 43], 
          [62, 98, 83, 108]]

a = flippingMatrix(matrix)
print(a)
