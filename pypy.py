#! /usr/bin/env python
# -*- coding: utf-8 -*-

#import oppai
class Oppai:
    """An oppai nurse class"""
    def __init__(self):
        self._milk = 0

    def __init__(self, milk):
        self._milk = milk

    def touch(self):
        return "やん"

    def nurse(self, milk):
        self._milk -= milk

    def showVolOfMilk(self):
        print "milk: ", self._milk, " ml"
        print

yun = Oppai(50)

yun.showVolOfMilk()

print "<html>\n<body>\n"
print "YUN 「"
print yun.touch()
print "\n</body>\n</html>"
