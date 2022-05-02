import tensorflow as tf
import PIL
import numpy as np
import os
import random
import keras.utils.np_utils
import keras

from keras.layers import *
from keras.utils import *
from keras.models import *

from keras import models    
from keras.models import load_model
import sys

model_url = "C:\\Users\\japni\\Desktop\\Sarthak Arora\\cnn (1).h5"
cnn=load_model(model_url)

file_path = "C:\\Users\\japni\\Desktop\\Sarthak Arora\\Test samples\\" + str(sys.argv[1])
im = PIL.Image.open(file_path)
# print(sys.argv[1])
# "C:\\Users\\japni\\Desktop\\Sarthak Arora\\2771.png"
im = np.array(im)

im = im.reshape(1,32,32,1)
im = im/255.0 

out = cnn(im)

prediction = np.argmax(out, axis = 1)
print(prediction)