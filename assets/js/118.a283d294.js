(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{749:function(t,_,v){"use strict";v.r(_);var r=v(7),e=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"单向加密、双向加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单向加密、双向加密"}},[t._v("#")]),t._v(" 单向加密、双向加密")]),t._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("在之前的文章"),v("a",{attrs:{href:"https://yancqs.github.io/blog/2021/09/29/sir/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web页面子资源完整性校验详细指南"),v("OutboundLink")],1),t._v("有涉及到将文件进行sha384加密后base64编码来检验文件是否被篡改。对其中用到的工具openssl比较感兴趣，所以顺带了解了加密算法，算是加密算法的一些常识。")]),t._v(" "),v("p",[t._v("以下为正文。")]),t._v(" "),v("p",[t._v("加密算法一般可分为两种，即"),v("strong",[t._v("单向加密算法")]),t._v("和"),v("strong",[t._v("双向加密算法")]),t._v("。")]),t._v(" "),v("p",[t._v("双向加密是加密算法中最常用的，它将可以直接理解的明文数据加密为不可直接理解的密文数据，在需要的时候，又可以使用一定的算法将这些加密以后的密文数据解密为原来的明文数据。双向加密适合于隐秘通讯，比如，比如在网络上注册用户或者购买商品时，提交的真实姓名、身份证号码、银行账号、信用卡密码等信息，应当通过双向加密算法加密以后，再在网络上传输，这样，可以有效的防止黑客的“偷听”，保证数据的安全，同时，网站接收到我们的数据以后，可以通过解密算法来获得准确的信息。")]),t._v(" "),v("p",[t._v("双向加密既可以加密，又可以解密。而单向加密则刚好相反，它只能对明文数据进行加密，而不能对加密了的密文数据再解密成原来的明文数据。可能读者会认为，不能解密的加密算法有什么作用呢？在实际应用中，对软件系统数据库中的系统用户信息（如用户密码）加密，就是一个典型的例子。当用户注册一个新的账号时，其用户密码信息不是直接保存到数据库，而是经过单向加密后再保存，这样，即使这些账号信息被泄露，别人也不能得到相应的用户密码，当然也就达不到盗窃账号的目的。")]),t._v(" "),v("p",[t._v("也许，有的读者会想，既然单向加密无法解密，那用户一旦忘记了密码，几乎没有办法找回原来的密码，又该怎么办呢？这确实是一个比较麻烦的问题，如果是一个功能简单的软件系统，也许真的只能删除忘记密码的账号信息，然后再重新注册来解决。但是比较完善的软件系统，一般都可以让用户提供一些其他的注册信息，如出生地址、父母妻子的职业等，如果正确，则直接给用户提供修改密码的功能，然后用新密码替换掉数据库中的旧密码，这样，用户只要记住新的用户密码就可以了。")]),t._v(" "),v("h2",{attrs:{id:"单向加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单向加密"}},[t._v("#")]),t._v(" 单向加密")]),t._v(" "),v("p",[t._v("常用的单向加密有:")]),t._v(" "),v("ul",[v("li",[t._v("MD5：MD5严格意义上来说，不是编码也不是加密，而是摘要算法，也叫做哈希算法和散列算法，"),v("strong",[t._v("它的典型应用是：防止篡改和校验数据")]),t._v("。无论是多长的输入，MD5都会输出长度为128bits的一个串 (通常用16进制表示为32个字符)。需要注意的是：摘要算法是不可以逆的。通过加密后的数据是不能得到原始数据的。")]),t._v(" "),v("li",[t._v("SHA: Secure Hash Algorithm，安全散列算法，数字签名等密码学应用中重要的工具，被广泛地应用于电子商务等信息安全领域。虽然SHA与MD5通过碰撞法都被破解了，但是SHA仍然是公认的安全加密算法，较之MD5更为安全。")]),t._v(" "),v("li",[t._v("HMAC：Hash Message Authentication Code，散列消息鉴别码，基于密钥的Hash算法的认证协议。消息鉴别码实现鉴别的原理是，用公开函数和密钥产生一个固定长度的值作为认证标识，用这个标识鉴别消息的完整性。使用一个密钥生成一个固定大小的小数据块，即MAC，并将其加入到消息中，然后传输。接收方利用与发送方共享的密钥进行鉴别认证等。")])]),t._v(" "),v("p",[t._v("单向加密算法特征：")]),t._v(" "),v("ul",[v("li",[t._v("输入一样，输出必然相同")]),t._v(" "),v("li",[t._v("雪崩效应：输入的微小改变，将引起结果巨大的变化")]),t._v(" "),v("li",[t._v("定长输出，无论原始数据多大，结果大小都是相同的")]),t._v(" "),v("li",[t._v("不可逆，无法根据特征码还原原来的数据")])]),t._v(" "),v("p",[t._v("加密工具：md5sum、sha1sum、openssl dgst")]),t._v(" "),v("h2",{attrs:{id:"双向加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双向加密"}},[t._v("#")]),t._v(" 双向加密")]),t._v(" "),v("p",[t._v("双向加密又分"),v("strong",[t._v("对称加密")]),t._v("和"),v("strong",[t._v("非对称加密")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),v("p",[t._v("采用单钥密码系统的加密方法，同一个密钥可以同时用作信息的加密和解密，这种加密方法称为对称加密，也称为单密钥加密。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("常用的对称加密有：")]),t._v(" "),v("ul",[v("li",[t._v("DES(Data Encryption Standard)：数据加密标准，速度较快，适用于加密大量数据的场合")]),t._v(" "),v("li",[t._v("IDEA(国际数据加密算法)")]),t._v(" "),v("li",[t._v("3DES：是基于DES，对一块数据用三个不同的密钥进行三次加密，强度更高")]),t._v(" "),v("li",[t._v("AES :（Advanced Encryption Standard）：高级加密标准，是下一代的加密算法标准，速度快，安全级别高")])])]),t._v(" "),v("li",[v("p",[t._v("对称加密算法特征：")]),t._v(" "),v("ul",[v("li",[t._v("加密方和解密方使用同一个密钥")]),t._v(" "),v("li",[t._v("加密解密的速度比较快，适合数据比较长时的使用")]),t._v(" "),v("li",[t._v("密钥传输的过程不安全，且容易被破解")])])])]),t._v(" "),v("h3",{attrs:{id:"非对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("常见的非对称加密算法有")]),t._v(" "),v("ul",[v("li",[t._v("RSA：RSA是第一个既能用于数据加密也能用于数字签名的算法。它易于理解和操作，也很流行。算法的名字以发明者的名字命名：Ron Rivest, Adi Shamir 和Leonard Adleman")])]),t._v(" "),v("blockquote",[v("p",[t._v("后续会看一下RAS的加密原理")])]),t._v(" "),v("ul",[v("li",[t._v("ECC（移动设备用）：椭圆曲线密码编码学")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://baike.baidu.com/item/Elgamal/856288",target:"_blank",rel:"noopener noreferrer"}},[t._v("El Gamal"),v("OutboundLink")],1),t._v("："),v("strong",[t._v("ElGamal")]),t._v("加密算法是一个基于"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E8%BF%AA%E8%8F%B2-%E8%B5%AB%E5%B0%94%E6%9B%BC%E5%AF%86%E9%92%A5%E4%BA%A4%E6%8D%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("迪菲-赫尔曼密钥交换(Diffie–Hellman key exchange)"),v("OutboundLink")],1),t._v("的"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("非对称加密"),v("OutboundLink")],1),t._v("算法")]),t._v(" "),v("li",[t._v("DSA（数字签名用）：数字签名算法，是一种标准的 DSS（数字签名标准）")])])])]),t._v(" "),v("p",[t._v("第六届国际密码学会议对应用于公钥密码系统的加密算法推荐了两种：基于大整数因子分解问题（IFP）的RSA算法和基于椭圆曲线上离散对数计算问题（ECDLP）的ECC算法。")]),t._v(" "),v("p",[t._v("RSA算法的特点之一是数学原理简单、在工程应用中比较易于实现，但它的单位安全强度相对较低。用国际上公认的对于RSA算法最有效的攻击方法--一般数域筛(NFS)方法去破译和攻击RSA算法，它的破译或求解难度是亚指数级的。")]),t._v(" "),v("p",[t._v("ECC算法的数学理论非常深奥和复杂，在工程应用中比较难于实现，但它的单位安全强度相对较高。用国际上公认的对于ECC算法最有效的攻击方法--Pollard rho方法去破译和攻击ECC算法，它的破译或求解难度基本上是指数级的。正是由于RSA算法和ECC算法这一明显不同，使得ECC算法的单位安全强度高于RSA算法，也就是说，要达到同样的安全强度，ECC算法所需的密钥长度远比RSA算法低。这就有效地解决了为了提高安全强度必须增加密钥长度所带来的工程实现难度的问题。")]),t._v(" "),v("ul",[v("li",[t._v("非对称加密算法特征\n"),v("ul",[v("li",[t._v("秘钥对，公钥(public key)和私钥(secret key)")]),t._v(" "),v("li",[t._v("公钥加密，私钥解密；私钥加密，公钥解密")])])])]),t._v(" "),v("p",[t._v("由于公钥使用的密钥长度非常长，所以公钥加密速度非常慢，一般不使用其去加密。")]),t._v(" "),v("p",[t._v("某一个用户用其私钥加密，其他用户用其公钥解密，实现数字签名的作用。")]),t._v(" "),v("p",[t._v("公钥加密的另一个作用是实现密钥交换。")]),t._v(" "),v("p",[t._v("由于非对称加密算法的运行速度比对称加密算法的速度慢很多，当我们需要加密大量的数据时，建议采用对称加密算法，提高加解密速度。对称加密算法不能实现签名，因此签名只能非对称算法。由于对称加密算法的密钥管理是一个复杂的过程，密钥的管理直接决定着他的安全性，因此当数据量很小时，我们可以考虑采用非对称加密算法。")]),t._v(" "),v("p",[v("strong",[t._v("在实际的操作过程中，我们通常采用的方式是：采用非对称加密算法管理对称算法的密钥，然后用对称加密算法加密数据，这样我们就集成了两类加密算法的优点，既实现了加密速度快的优点，又实现了安全方便管理密钥的优点。")])]),t._v(" "),v("h3",{attrs:{id:"加密工具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加密工具"}},[t._v("#")]),t._v(" 加密工具")]),t._v(" "),v("ul",[v("li",[t._v("openssl")]),t._v(" "),v("li",[t._v("gpg")])]),t._v(" "),v("h2",{attrs:{id:"参考文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://blog.csdn.net/top_explore/article/details/104166990",target:"_blank",rel:"noopener noreferrer"}},[t._v("单向加密双向加密简要汇总"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://nieyong.github.io/wiki_ny/%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95%E5%B8%B8%E8%AF%86.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("加密算法根据应用场景的分类：单向加密和双向加密"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://blog.51cto.com/laoyinga/1954189",target:"_blank",rel:"noopener noreferrer"}},[t._v("单向散列加密，对称加密，非对称加密"),v("OutboundLink")],1)])]),t._v(" "),v("comment")],1)}),[],!1,null,null,null);_.default=e.exports}}]);