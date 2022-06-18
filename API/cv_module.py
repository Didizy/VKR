import os
import cv2 as cv


def findDescriptor(images, orb):
    descList = []
    for image in images:
        kp, des = orb.detectAndCompute(image, None)
        descList.append(des)
    return descList


def findID(img, desList, orb):
    kp2, des2 = orb.detectAndCompute(img, None)
    bf = cv.BFMatcher()
    matchList = []
    finalValue = -1
    try:
        for des1 in desList:
            matches = bf.knnMatch(des1, des2, k=2)
            good = []
            for m, n in matches:
                if m.distance < 0.85 * n.distance:
                    good.append([m])
            matchList.append(len(good))
    except:
        pass
    if len(matchList) != 0:
        if max(matchList) > 20:
            finalValue = matchList.index(max(matchList))

    return finalValue


class Classifier:

    @staticmethod
    def checkImage(image):
        orb = cv.ORB_create(nfeatures=1500)
        path = 'media/images/markers'
        images = []
        classNames = []
        myList = os.listdir(path)

        for cl in myList:
            imgCur = cv.imread(f'{path}/{cl}', 0)
            images.append(imgCur)
            classNames.append(os.path.splitext(cl)[0])

        desList = findDescriptor(images, orb)

        id = findID(image, desList, orb)
        if id != -1:
            return classNames[id]
        else:
            return False
