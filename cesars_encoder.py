# Question
# Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

# Original alphabet:      abcdefghijklmnopqrstuvwxyz
# Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
# Example


# The alphabet is rotated by , matching the mapping above. The encrypted string is .

# Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

# Function Description

# Complete the caesarCipher function in the editor below.

# caesarCipher has the following parameter(s):

# string s: cleartext
# int k: the alphabet rotation factor
# Returns

# string: the encrypted string

# 1st Attemtion : without ord(), and chr()
def caesarCipher(s, k):
    rst_str = ''
    map_str = 'abcdefghijklmnopqrstuvwxyz'
    for alp in s:
        if alp.isalpha() and alp.islower():
            alp_index = (map_str.index(alp)+k)%26
            enc_alp = map_str[int(alp_index)]
            rst_str += enc_alp
        elif alp.isalpha() and alp.isupper():
            alp_index = (map_str.upper().index(alp)+k)%26
            enc_alp = map_str.upper()[int(alp_index)]
            rst_str += enc_alp
        else: 
            rst_str += alp
    return rst_str        

# Second Attemtion
def caesarCipher(s, k):
    encrypted = ""
    for letter in s:
        if letter.isalpha():
            if letter.isupper():
                encrypted += chr((ord(letter) - 65 + k) % 26 + 65)
            else:
                encrypted += chr((ord(letter) - 97 + k) % 26 + 97)
        else:
            encrypted += letter
    return encrypted

#Assertion
assert caesarCipher("I'm a boy you are girl Maad!!!", 3) == "L'p d erb brx duh jluo Pddg!!!"